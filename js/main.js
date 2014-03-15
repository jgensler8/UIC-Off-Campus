require.config({
  paths:{
    jquery: 'jquery',
    underscore: 'lodash',
    Backbone: 'backbone',
    app: 'app',
    router: 'router'
  }
});

define([
  'app',
], function(app){
  app.initialize();
});