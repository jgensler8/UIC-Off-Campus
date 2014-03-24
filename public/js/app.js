var AppRouter = Backbone.Router.extend({
  routes: {
    'about': 'showAbout',
    'account': 'showAccount',
    'help': 'showHelp',
    'map': 'showMap'
  },

  initialize: function(){
    var mapModel = new ApptMapModel();
    var mapViewContent = $( mapView.el );
  },

  showAbout: function(){
    console.log("SHOWING ABOUT")
    var aboutView = new AboutView( { 'text': "Welcome to UIC Social Living!" } );
    $('About').html(aboutView.render().el);
    mapContent.hide();
  },

  showAccount: function(){
  },

  showHelp: function(){
  },

  showMap: function(){
    var mapView = new ApptMapView( { 'model': mapModel } );
    //mapContent.show();
    //mapView.refresh();
  },
});

var app = new AppRouter();

$(function(){
  Backbone.history.start();
  app.AppRouter.navigate("#", {trigger: true} );
})