
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var FacebookStrategy = require('passport-local').Strategy;
var FacebookAppOption = require('./facebook_options.json');

passport.use(
  new FacebookStrategy({
    clientID: ,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://127.0.0.1/login'
  },
  function(accessToken, refreshToken, profile, done){
    User.findOrCreate(this, function(err, user){
      if(err){ return done(err); }
      done(null,user);
    });
  }));

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  //res.sendfile( path.join(__dirname, 'public') + '/index.html');
  res.render( path.join(__dirname, 'public') + '/templates/index.hbs');
});

app.post('/login', passport.authenticate('local',
  { successRedirect: '#/account',
    failureRedirect: '#/login'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
