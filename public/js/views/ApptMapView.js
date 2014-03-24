var ApptMapView = Backbone.View.extend({
  el: '#ApptMap',
  initialize: function(){
    var map;
    this.model.set('map', new gmaps.Map( this.el, this.model.get('mapOptions')));
  },
  render: function(){
    return this.model.map;
  },
  refresh: function(){
    gmaps.event.trigger( this.model.map, 'resize');
  }
});