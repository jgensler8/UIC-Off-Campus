var AppRouter = Backbone.Router.extend({
  routes: {
    'about': 'showAbout',
    'login': 'showLogin',
    'account': 'showAccount',
    'help': 'showHelp',
    'search': 'showSearch',
    'create': 'showCreate',
    'privacypolicy': 'showPrivacyPolicy'
  },

  initialize: function(){
    this.searchModel = new SearchModel();
    this.searchView = new SearchView({ model: this.searchModel });
    this.createListingModel = new ListingModel();
    this.createListingView = new ListingView({ model: this.createListingModel});
    this.aboutView = new AboutView();
    this.loginView = new LoginView();
    this.helpView = new HelpView();
    this.accountModel = new AccountModel();
    this.accountView = new AccountView({ model: this.accountModel });
    this.privacyView = new PrivacyPolicyView();
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
        $.when( $('#app').html(app.accountView.render().el)).then( $(document).foundation('reflow') ); //XXX
      },
      error: function(data, res){
        app.navigate('login', {trigger: true});
      }
    });
  },

  showHelp: function(){
    $('#app').html(this.helpView.render().el);
  },

  showSearch: function(){
    $.when( $('#app').html(this.searchView.render().el)).then( this.searchModel.renderMap() );
  },

  showCreate: function(){
    this.accountModel.checkAuth({
      success: function(data, res){
        $('#app').html(app.createListingView.renderForm().el); //XXX
      },
      error: function(data, res){
        app.navigate('login', {trigger: true});
      }
    });
  },

  showPrivacyPolicy: function(){
    $('#app').html( this.privacyView.render().el );
  }

});

var app = new AppRouter();

$(function(){
  Backbone.history.start();
})