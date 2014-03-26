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
var sqlite3 = require('sqlite3').verbose();

//setup the users database
var db_users = new sqlite3.Database("users.db");
var userTable = "users";
var userSchema = "("
  + "netid TEXT PRIMARY KEY,"
  + "first_name TEXT NOT NULL,"
  + "last_name TEXT NOT NULL,"
  + "facebook_id TEXT"
  + ")";
db_users.run("CREATE TABLE IF NOT EXISTS " + userTable + " " + userSchema);

var userTest = {
  firstName: "Jeff",
  lastName: "Gensler",
  netid: "jgensl2",
  facebook_id: "null"
}

db_users.run("INSERT OR IGNORE INTO " + userTable + " VALUES (" 
  + "\"" + userTest.netid + "\","
  + "\"" + userTest.firstName + "\"," 
  + "\"" + userTest.lastName + "\"," 
  + "\"" + userTest.facebook_id + "\"" 
  + ")" );

//setup the users database
var db_listings = new sqlite3.Database("listings.db");
var listingTable = "listings";
var listingSchema = "("
  + "netid TEXT FOREIGN KEY,"
  + "listingID TEXT PRIMARY KEY,"
  + "listingType TEXT NOT NULL,"
  + "facebook_id TEXT,"
  + "postDate TEXT,"
  + "expireDate TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + "facebook_id TEXT,"
  + ")";
db_litings.run("CREATE TABLE IF NOT EXISTS " + listingTable + " " + listingSchema);

var userTest = {
  firstName: "Jeff",
  lastName: "Gensler",
  netid: "jgensl2",
  facebook_id: "null"
}

db_listings.run("INSERT OR IGNORE INTO " + userTable + " VALUES (" 
  + "\"" + userTest.netid + "\","
  + "\"" + userTest.firstName + "\"," 
  + "\"" + userTest.lastName + "\"," 
  + "\"" + userTest.facebook_id + "\"" 
  + ")" );

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
    db_users.run("INSERT OR IGNORE INTO " + userTable + " VALUES ("
      + "\"" + profile.username + "\"," 
      + "\"" + profile.first_name + "\"," 
      + "\"" + profile.last_name + "\"," 
      + "\"" + profile.id + "\"" 
      +")");
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
//will need more CRUD endpoints


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
