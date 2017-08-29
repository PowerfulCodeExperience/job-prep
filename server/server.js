const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const strategy = require(`./strategy.js`);
const path = require('path');

const config = require('./config');

const app = express();

// Database Connection

massive( config.connection_string ).then( dbInstance => {
  app.set('db', dbInstance);
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
passport.use( strategy );

passport.serializeUser( (user, done) => done(null, { id: user.id, picture: user.picture }) );
passport.deserializeUser( (obj, done) => {
  console.log("obj", obj);
  const db = app.get('db');

  db.users.find_user([ obj.id ]).then( response => {
    console.log(response);
    if ( response.length === 1 ) {
      // User is in the database
      done(null, response[0]);
    } else if ( response.length === 0 ) {
      // User is not in the database - Add them in
      db.users.add_user([ obj.id, obj.picture ]).then( response => {
        done(null, response[0]);
      });
    }
  });
});

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`)} );
