var PrivacyPolicyView = Backbone.View.extend(
{  contactEmail: 'jgensl2@uic.edu',
  initialize: function(){
  },
  render: function(){
    this.$el.html( Handlebars.templates.privacyPolicy(this) );
    return this;
  }
})
