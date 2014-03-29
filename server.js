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
app.get('/account*', ensureAuthenticated, function( req, res){
  res.json( req.user);
});
//will need more CRUD endpoints... maybe

/// listing routes
app.get('/listing/all', function(req, res, next){
  //listing.find('*');
  res.json({result: 'something'});
});

//create
app.post('/listing', function(req, res, next){
  console.log("YOU SENT A POST");
  console.log( req.body);
  var userData = req.body;
  //do some validation
  //TODO authenticate! and grab user info! AND MAKE SURE TO HAVE SET LAT AND LON
  var newListing = new listingSchema();
  newListing.listingType = userData.listingType;
  newListing.postedBy = userData.postedBy;
  newListing.postDate = userData.availableFromDate;
  newListing.availableFromDate = userData.availableFromDate;
  newListing.availableToDate = userData.availableToDate;
  newListing.address.addr = userData.addrLine;
  newListing.address.addrAptNum = userData.addrAptNum;
  newListing.address.addrCity = userData.addrCity;
  newListing.address.addrZip = userData.addrZip;
  newListing.address.addrState = userData.addrState;
  newListing.address.lat = userData.lat;
  newListing.address.lon = userData.lon;
  newListing.features.price = userData.price;
  newListing.features.bedrooms = userData.bedrooms;
  newListing.features.bathrooms.full = userData.fullBathrooms;
  newListing.features.bathrooms.half = userData.halfBathrooms;
  newListing.features.utilities.garbageInc = ( 'on' === userData.garbageInc) ? true : false;
  newListing.features.utilities.heatInc = ( 'on' === userData.heatInc) ? true : false;
  newListing.features.utilities.waterInc = ( 'on' === userData.waterInc) ? true: false;
  newListing.features.utilities.electricInc = ( 'on' === userData.electricInc) ? true : false;
  newListing.features.utilities.internetInc = ( 'on' === userData.internetInc) ? true : false;
  newListing.features.squarefeet = userData.squarefeet;
  newListing.features.catAllowed = ( 'on' === userData.catAllowed) ? true : false;
  newListing.features.dogAllowed = ( 'on' === userData.dogAllowed) ? true : false;
  newListing.features.smokingAllowed = ( 'on' === userData.smokingAllowed) ? true : false;

  console.log(newListing);
  res.status(200).json({success:true});
});
//read
app.get('/listing/:id', function(req, res, next){
  res.json({result: 'another thing'});
});
//update
app.put('listing/:id', function(req, res, next){
});
//delete
app.delete('/listing/:id', function(req, res, next){
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
