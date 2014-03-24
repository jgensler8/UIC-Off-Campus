var AppRouter = Backbone.Router.extend({
  routes: {
    'about': 'showAbout',
    'account': 'showAccount',
    'help': 'showHelp',
    'map': 'showMap'
  },

  initialize: function(){
    //this.mapModel = new ApptMapModel();
    //this.mapView = new ApptMapView({ 'model': this.mapModel });
    this.aboutView = new AboutView();
    this.helpView = new HelpView();
  },

  showAbout: function(){
    $('#app').html(this.aboutView.render().el);
  },

  showAccount: function(){
  },

  showHelp: function(){
    $('#app').html(this.helpView.render().el);
  },

  showMap: function(){
    //$('#app').html(this.mapView.render().el);
  },
});

var app = new AppRouter();

$(function(){
  Backbone.history.start();
})