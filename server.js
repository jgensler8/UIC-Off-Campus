#!/usr/bin/env node

/**
 * Module dependencies.
 */
var argv = require('optimist').argv;
var express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
//geocoding
var geocoder = require('geocoder');
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
      id: profile.id,
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
app.set('port', argv.port || 8000);
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
  return res.render( path.join(__dirname, 'public') + '/templates/index.hbs');
});



/// *** account routes ***
//facebook routes
app.get('/auth/facebook',
  passport.authenticate('facebook', {scope: ['user_likes']}),
  function(req, res){
    return res.json(req.user);
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
  return res.status(401).json({error:true});
}
app.get('/account*', ensureAuthenticated, function( req, res){
  listingSchema.find({ postedById: req.user.id }, function(err,listings){
    if(err){
      req.user.listingSuccess = false;
      return res.json( req.user);
    }
    else{
      req.user.listings = listings;
      req.user.linstingSuccess = true;
      return res.json( req.user);
    }
  });
});
//will need more CRUD endpoints... maybe



/// *** listing routes ****
app.get('/listing', function(req, res, next){
  listingSchema.find(function(err, listings){
    if(err){
      console.log("ERROR QUERYING LISTINGS DATABASE");
      return res.status(200).json({error: true});
    }
    else return res.json(listings);
  });
});
/*
app.get('/listing/userdata', ensureAuthenticated, function(req, res, next){
  listingSchema.find(function(err, listings){
    if(err){
      console.log("ERROR QUERYING LISTINGS DATABASE");
      return res.status(200).json({error: true});
    }
    else return res.json(listings);
  });
});
*/
//create
app.post('/listing', ensureAuthenticated, function(req, res, next){
  var userData = req.body;

  listingSchema.find({ postedById: req.user.id }, function(err,listings){
    if(err){
      console.log("ERROR QUERYING LISTINGS DATABASE");
      return res.status(200).json({error: true, type: 'DATABASE'});
    }
    else{
      if(listings.length > 5){
        return res.status(200).json({error: true, type: 'LIMIT'});
      }
    }
  });

  var address = userData.addrLine + " " 
    + userData.addrAptNum + " "
    + userData.addrCity + " "
    + userData.addrState + " " 
    + userData.addrZip;

  geocoder.geocode(address, function( err, data){
    if(err){
      console.log('ERROR GENERATING GEOCODE');
      return res.status(200).json({error: true, type: 'GEOCODE'});
    }
    else{
      console.log(data);
      if(data.status === 'ZERO_RESULTS'){
        console.log('ERROR GENERATING GEOCODE');
        return res.status(200).json({error: true, type: 'GEOCODE'});
      }
      var geolat = data.results[0].geometry.location.lat;
      var geolon = data.results[0].geometry.location.lng;
      var date = new Date();
      var hour = date.getHours();
      hour = (hour < 10 ? "0" : "") + hour;
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      month = (month < 10 ? "0" : "") + month;
      var day  = date.getDate();
      day = (day < 10 ? "0" : "") + day;
      var newListing = new listingSchema({
        listingType: parseInt(userData.listingType),
        postedById: req.user.id,
        postedByName: req.user.name.givenName,
        postDate: year + '-' + month + '-' + day,
        availableFromDate: userData.availableFromDate,
        availableToDate: userData.availableToDate,
        addrLine: userData.addrLine,
        addrAptNum: userData.addrAptNum,
        addrCity: userData.addrCity,
        addrZip : parseInt(userData.addrZip),
        addrState: userData.addrState,
        contactEmail: userData.contactEmail,
        lat: geolat,
        lon: geolon,
        price: parseInt(userData.price),
        bedrooms: parseInt(userData.bedrooms),
        fullBathrooms: parseInt(userData.fullBathrooms),
        halfBathrooms: parseInt(userData.halfBathrooms),
        garbageInc: ('on' === userData.garbageInc) ? true : false,
        heatInc: ('on' === userData.heatInc) ? true : false,
        waterInc: ('on' === userData.waterInc) ? true : false,
        electricInc: ('on' === userData.electricInc) ? true : false,
        internetInc: ('on' === userData.internetInc) ? true : false,
        squareFeet: (userData.squareFeet) ? parseInt(userData.squareFeet) : 0,
        catAllowed: ('on' === userData.catAllowed) ? true : false,
        dogAllowed: ('on' === userData.dogAllowed) ? true : false,
        smokingAllowed: ('on' === userData.smokingAllowed) ? true : false,
      });

      newListing.save(
        function(err){
          if(err){
            console.log('ERROR SAVING A LISTING');
            console.log(err);
            return res.status(200).json({error: true, type: 'DATABASE'});
          }
          else{
            newListing.error = false;
            return res.status(200).json({error: false, type: 'SUCCESS'});
          }
        }
      );
    }
  }); //end geocode

});
//read
app.get('/listing/:id', function(req, res, next){
  return res.json({result: 'success'});
});
//update
app.put('/listing/:id', function(req, res, next){
  console.log(req.body);
  return res.json({success:true});
});
//delete
app.delete('/listing/:id', function(req, res, next){
  console.log(req.body);
  return res.json({success:true});
});
//create a listing
function createListing(queryResponse, req, res, next, userData){
  console.log(queryResponse);
  console.log(userData);
  var newListing = new listingSchema({
    listingType: parseInt(userData.listingType),
    postedBy: userData.postedBy,
    postDate: userData.postDate,
    availableFromDate: userData.availableFromDate,
    availableToDate: userData.availableToDate,
    addrLine: userData.addrLine,
    addrAptNum: userData.addrAptNum,
    addrCity: userData.addrCity,
    addrZip : parseInt(userData.addrZip),
    addrState: userData.addrState,
    lat: parseInt(userData.lat),
    lon: parseInt(userData.lon),
    price: parseInt(userData.price),
    bedrooms: parseInt(userData.bedrooms),
    fullBathrooms: parseInt(userData.fullBathrooms),
    halfBathrooms: parseInt(userData.halfBathrooms),
    garbageInc: ('on' === userData.garbageInc) ? true : false,
    heatInc: ('on' === userData.heatInc) ? true : false,
    waterInc: ('on' === userData.waterInc) ? true : false,
    electricInc: ('on' === userData.electricInc) ? true : false,
    internetInc: ('on' === userData.internetInc) ? true : false,
    squareFeet: parseInt(userData.squareFeet),
    catAllowed: ('on' === userData.catAllowed) ? true : false,
    dogAllowed: ('on' === userData.dogAllowed) ? true : false,
    smokingAllowed: ('on' === userData.smokingAllowed) ? true : false,
  });

  newListing.save(
    function(err){
      if(err){
        console.log('ERROR SAVING A LISTING');
        return res.status(200).json({error: true, type: 'DATABASE'});
      }
    }
  );

  newListing.error = false;
  return res.status(200).json(newListing);
};


/// *** facebook likes endpoint ***
app.get('/likes', ensureAuthenticated, function( req, res, next){
  return res.json({likes: 'stuff'});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
