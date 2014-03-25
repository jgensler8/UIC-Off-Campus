#!/usr/bin/env node
/**
 * Module dependencies.
 */
var argv = require('optimist').argv;
var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookOptions = require('./facebook_options.json');

//facebook authentication
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(
  new FacebookStrategy({
    clientID: FacebookOptions.appId,
    clientSecret: FacebookOptions.appSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done){
    for( field in profile){
      console.log( field + " : " + profile[field]);
    }

    process.nextTick(function(){
      return done(null, profile);
    });
  })
);

//init app
var app = express();

// all environments
app.set('port', argv.port || 3000);
app.set('view engine', 'hbs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({secret: 'SECRET'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  //res.sendfile( path.join(__dirname, 'public') + '/index.html');
  res.render( path.join(__dirname, 'public') + '/templates/index.hbs');
});

//facebook routes
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/#account',
    failureRedirect: '/#failure'
  }));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
