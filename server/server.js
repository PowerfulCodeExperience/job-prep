const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const path = require('path');

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
app.get('/api/resources', mainCtrl.getResources);
app.get('/api/company', mainCtrl.getCompany);

app.post('/api/company', mainCtrl.postCompany);

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`)} );