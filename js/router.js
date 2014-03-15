define([
  'jquery',
  'underscore',
  'Backbone',
  'ApptMapView',
  ], function( $, _, Backbone, ApptMapView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        'about': 'showAbout',
        'account': 'showAccount',
        'help': 'showHelp',
        'map': 'showMap'
      }
    });

    var initialize = function(){
      var router = new AppRouter();

      router.on('route:showAbout', function(){

      });
      router.on('route:showAccount', function(){

      });
      router.on('route:showHelp', function(){

      });
      router.on('route:showMap', function(){
        var mapView = new ApptMapView();
        mapView.render();
      });

      Backbone.history.start();
    };
    return {
      initialize: initialize
    }
  });