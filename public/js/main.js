require.config({
  paths:{
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/dist/lodash',
    Backbone: '../bower_components/backbone-amd/backbone',
    app: 'app'
  }
});

define([
  'app',
], function(app){
  app.initialize();
});
