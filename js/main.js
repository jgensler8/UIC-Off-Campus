require.config({
  paths:{
    jquery: 'jquery',
    underscore: 'lodash',
    Backbone: 'backbone',
    app: 'app'
  }
});

define([
  'app',
], function(app){
  app.initialize();
});