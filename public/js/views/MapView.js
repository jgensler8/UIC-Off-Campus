var MapView = Backbone.View.extend({
  renderMap: function(){
    var map = new google.maps.Map( document.getElementById(this.model.id)
      , this.model.attributes);
    this.model.set('map', map);
  },
  render: function(){
    this.$el.html( Handlebars.templates.mapView(this.model.attributes));
    return this;
  },
  initialize: function(){
    _.bindAll(this, 'render', 'renderMap');
  }
});
