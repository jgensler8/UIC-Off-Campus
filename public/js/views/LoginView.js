var LoginView = Backbone.View.extend({
  options: {
    buttons: [
      {text: 'Login with Facebook', link: 'auth/facebook'},
      {text: 'Login with UIC netID', link: 'https://www.uic.edu/htbin/location.pl?location=http://localhost:3000/#account'}
    ]
  },
  render: function(){
    this.$el.html( Handlebars.templates.loginView(this.options));
    return this;
  }
})