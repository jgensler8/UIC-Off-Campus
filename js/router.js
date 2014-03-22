define([
  'jquery',
  'underscore',
  'Backbone',
  'ApptMapView',
  'ApptMapModel',
  ],
function( $, _, Backbone, ApptMapView, ApptMapModel){
  var AppRouter = Backbone.Router.extend({
    routes: {
      'about': 'showAbout',
      'account': 'showAccount',
      'help': 'showHelp',
      'map': 'showMap'
    }
  });

  var mapModel = new ApptMapModel();
  var mapView = new ApptMapView( { 'model': mapModel } );
  var mapContent = $( mapView.el );

  var initialize = function(){
    var router = new AppRouter();

    router.on('route:showAbout', function(){
      mapContent.hide();
    });
    router.on('route:showAccount', function(){
      mapContent.hide();

    });
    router.on('route:showHelp', function(){
      mapContent.hide();
      
    });
    router.on('route:showMap', function(){
      //mapContent.show();
      //mapView.refresh();
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  }
});