var AboutView = new Backbone.View.extend({
  template: Handlebars.compile(
    '<div>{{text}}</div>'
    ),
  render: function(){
    this.$el.html(this.template(this.options));
    return this;
  }
});