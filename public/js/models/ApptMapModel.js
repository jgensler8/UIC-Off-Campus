var ApptMapModel = Backbone.Model.extend({
  defaults: {
    zoom: 16,
    scaleControl: true,
    lat: 41.871850,
    lon: -87.649250,
    id: 'ApptMap',
    mapOptions: {},
    map: {}
  },
  initialize: function(lat, lol){
    var currentLatLng = new gmaps.LatLng( this.get('lat'), this.get('lon'));
    var mapOptions = {
      zoom: this.get('zoom'),
      scaleControl: this.get('scaleControl'),
      center: currentLatLng
    }
    this.set('mapOptions', mapOptions);
  }
});