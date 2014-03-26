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
    this.accountModel = new AccountModel();
    this.accountView = new AccountView({ 'model': this.accountModel });
  },

  showAbout: function(){
    $('#app').html(this.aboutView.render().el);
  },

  showLogin: function(){
    $('#app').html(this.loginView.render().el);
  },

  showAccount: function(){
    this.accountModel.checkAuth({
      success: function(data, res){
        $('#app').html(app.accountView.render().el);
      },
      error: function(data, res){
        app.navigate('login', {trigger: true});
      }
    })
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