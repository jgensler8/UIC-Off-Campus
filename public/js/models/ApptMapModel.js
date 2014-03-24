var ApptMapModel = Backbone.Model.extend({
  defaults: {
    urlRoot: '/map',
    lat: 41.871850,
    lon: -87.649250,
    mapOptions: {
      zoom: 16,
      scaleControl: true
    },
    map: {}
  },
  initialize: function(){
    var currentLatLng = new google.maps.LatLng( this.get('lat'), this.get('lon'));
  }
});