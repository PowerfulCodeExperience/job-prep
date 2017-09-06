const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const path = require('path');
const axios = require('axios');

const mainCtrl = require('./controllers/mainCtrl');

const config = require('./config');

const app = express();

// Database Connection

massive( config.connection_string ).then( dbInstance => {
  app.set('db', dbInstance);
  dbInstance.initialize_db();
}).catch( err => console.log('Error on connecting to database:', err) );

// Sessions/Passport/Auth

app.use(session({
  secret: config.session_secret,
  resave: false,
  saveUninitialized: false
}));

app.use( bodyParser.json() );
app.use( passport.initialize() );
app.use( passport.session() );

passport.use(new Auth0Strategy({
  domain: config.domain,
  clientID: config.clientid,
  clientSecret: config.clientsecret,
  callbackURL: 'http://localhost:3001/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  //Go to db to find and create user
    let db = app.get('db')
    , authId = profile.id
    , email = profile.emails[0].value
    , givenName = profile.name.givenName || "anonymous"
    , familyName = profile.name.familyName || "anonymous"
    , nickname = profile.nickname || "anonymous"
    , picture = profile.picture;

  db.get_user([authId]).then( user => {
    if(!user.length){
      db.create_user([authId, nickname, givenName, familyName, email, picture])
      .then((userCreated) => {
        return done(null, userCreated[0])
        // return done(null, profile) // Go to serialize user when done is invoked
      }).catch( (e) => console.log(e))
    } else {
      return done(null, user[0]);
      // return done(null, profile);  Go to serialize user when done is invoked
    }
  }).catch(err => console.log('check failed', err));
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {successRedirect: 'http://localhost:3000/'}));

passport.serializeUser(function(profileToSession, done) {
  done(null, profileToSession); // Puts second argument on session 
});

passport.deserializeUser(function(profileFromSession, done) {
  done(null, profileFromSession); //obj is value from session
});

// Endpoints

app.get('/api/signIn', mainCtrl.signIn);
app.get('/api/signOut', mainCtrl.signOut);
app.get('/api/getGoals', mainCtrl.getGoals);
app.get('/api/getTasks', mainCtrl.getTasks);
app.get('/api/resources', mainCtrl.getResources);
app.get('/api/getWeather', function getWeather(req, res) {
  return axios.get(`http://api.weatherbit.io/v2.0/forecast/hourly?ip=auto&units=I&key=${config.API_KEY}`)
  .then(response => res.status(200).send(response.data))
  .catch(error => error)
});

app.post('/api/postGoal', mainCtrl.postGoal)
app.post('/api/postTask', mainCtrl.postTask)
app.get('/api/resources', mainCtrl.getResources);
app.get('/api/company', mainCtrl.getCompany);
app.get('/api/returnCompany/:id', mainCtrl.returnCompany);
app.get('/api/getContacts/:id', mainCtrl.getContacts);

// Add a company and a contact 

app.post('/api/company', mainCtrl.postCompany);
app.post('/api/contact', mainCtrl.postContact);

// Update status of contact

app.put('/api/status', mainCtrl.updateStatus);

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`)} );