var SearchView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'render', 'renderMap');
  },
  render: function(){
    this.$el.html( Handlebars.templates.searchView(this.model));
    return this;
  },
  renderMap: function(){
    this.model.mapView.renderMap();
  }
})