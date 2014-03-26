var AccountView = Backbone.View.extend({
  render: function(){
    this.$el.html( Handlebars.templates.accountView(this.model.attributes));
    return this;
  },
  events:{
    'change': this.attributesChanged
  },
  attributesChanged: function(){

  }
});