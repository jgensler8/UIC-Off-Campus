var MapModel = Backbone.Model.extend({
  defaults:{
    zoom: 15,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(41.871850, -87.649250),
    id: 'googleMap',
    map: {}
  },
  initialize: function(){

  }
});
