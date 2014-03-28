#!/usr/bin/env node

/**
 * Module dependencies.
 */
var argv = require('optimist').argv;
var express = require('express');
var http = require('http');
var path = require('path');
//authentication
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookOptions = require('./facebook_options.json');
//database
var mongoose = require('mongoose');
var mongooseOptions = require('./mongolab_options.json');
var listingSchema = require('./schemas/listingSchema.js').listing;
var accountSchema = require('./schemas/accountSchema.js').account;

//connect to the database
mongoose.connect('mongodb://'+mongooseOptions.username+":"
  +mongooseOptions.userpass+"@ds045907.mongolab.com:45907/offcampus");

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
    var toAdd = new accountSchema({
      netid: profile.username,
      firstName: profile.name.familyName,
      lastName: profile.name.givenName,
      facebookid: profile.username
    });
    toAdd.save(function(err){ if(err) console.log('ERROR SAVING A RECORD (can be from duplicates'); });
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

//for serving js/css/templates
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  //res.sendfile( path.join(__dirname, 'public') + '/index.html');
  res.render( path.join(__dirname, 'public') + '/templates/index.hbs');
});

/// account routes
//facebook routes
app.get('/auth/facebook',
  passport.authenticate('facebook'),
  function(req, res){
    res.json(req.user);
  }
);
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/#account',
    failureRedirect: '/#login'
  }));
//internal verification routes/middleware
function ensureAuthenticated(req, res, next){
  //console.log( req);
  if( req.isAuthenticated()){
    return next();
  }
  res.status(401).json({error:true});
}
app.get('/account*', ensureAuthenticated, function(req,res){
  res.json( req.user);
});
//will need more CRUD endpoints... maybe

/// listing routes
app.get('/listing/all', function(req, res, next){
  //listing.find('*');
  res.json({result: 'something'});
});

app.post('/listing/:id', function(req,res,next){
  //not really sure what to do here yet
  //create
});
app.get('/listing/:id', function(req, res, next){
  res.json({result: 'another thing'});
  //read
});
app.put('listing/:id', function(req, res, next){
  //MOAR CRUD
  //update
});
app.delete('/listing/:id', function(req,res,next){
  //delete
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
