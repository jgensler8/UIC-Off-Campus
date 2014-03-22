var restify = require('restify');
var server = restify.createServer();

//static front end "template"
server.get('/', restify.serveStatic({
  'directory': './templates/',
  'default': 'index.html'
}));

// front end vendor
server.get('foundation.css', restify.serveStatic({
  'directory': './bower_components/foundation/css/'
}));
server.get('foundation.js', restify.serveStatic({
  'directory': './bower_components/foundation/js/'
}));
server.get('modernizr.js', restify.serveStatic({
  'directory': './bower_components/foundation/js/vendor/'
}));
server.get('require.js', restify.serveStatic({
  'directory': './bower_components/requirejs/'
}));
server.get('async.js', restify.serveStatic({
  'directory': './bower_components/requirejs-plugins/src/'
}));
server.get('backbone.js', restify.serveStatic({
  'directory': './bower_components/backbone-amd/'
}));
server.get('jquery.js', restify.serveStatic({
  'directory': './bower_components/jquery/dist/'
}));
server.get('lodash.js', restify.serveStatic({
  'directory': './bower_components/lodash/dist/'
}));
// front end user basic
server.get('router.js', restify.serveStatic({
  'directory': './js/'
}));
server.get('main.js', restify.serveStatic({
  'directory': './js/'
}));
server.get('app.js', restify.serveStatic({
  'directory': './js/'
}));
//front end user other
server.get('gmaps.js', restify.serveStatic({
  'directory': './js/'
}));
//front end user models
server.get('ApptMapModel.js', restify.serveStatic({
  'directory': './js/models/'
}));
//front end user views
server.get('ApptMapView.js', restify.serveStatic({
  'directory': './js/views/'
}));

//start the server
server.listen( 8000, function(){
	console.log("listening");
});
