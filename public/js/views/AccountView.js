var AccountView = Backbone.View.extend({
  render: function(){
    this.$el.html( Handlebars.templates.accountView(this.model));
    return this;
  }
});