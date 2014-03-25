var AppRouter = Backbone.Router.extend({
  routes: {
    'about': 'showAbout',
    'login': 'showLogin',
    'account': 'showAccount',
    'help': 'showHelp',
    'map': 'showMap'
  },

  initialize: function(){
    //this.mapModel = new ApptMapModel();
    //this.mapView = new ApptMapView({ 'model': this.mapModel });
    this.aboutView = new AboutView();
    this.loginView = new LoginView();
    this.helpView = new HelpView();
    this.accountView = new AccountView();
  },

  showAbout: function(){
    $('#app').html(this.aboutView.render().el);
  },

  showLogin: function(){
    $('#app').html(this.loginView.render().el);
  },

  showAccount: function(){
    this.accountModel = new AccountModel({name:'jedd'});
    this.accountView = new AccountView( {model: this.accountModel} );
    $('#app').html(this.accountView.render().el);
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