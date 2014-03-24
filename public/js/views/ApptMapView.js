var ApptMapView = Backbone.View.extend({
  template: '<div>{{map}}</div>',
  initialize: function(text){
    //this.model.set('map', new google.maps.Map( this.model.$el, this.model.get('mapOptions')));
  },
  render: function(){
    this.$el.html( Handlebars.compile(this.model.mapOptions, this.template));
    return this;
  },
  refresh: function(){
    gmaps.event.trigger( this.model.map, 'resize');
  }
});