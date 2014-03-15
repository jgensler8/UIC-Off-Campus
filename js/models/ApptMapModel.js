define([
  'jquery',
  'underscore',
  'Backbone',
  'gmaps'
  ], function( $, _, Backbone, gmaps){
  var ApptMapModel = Backbone.Model.ApptModel({
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
      console.log("created a appt model");

      var currentLatLng = new gmaps.LatLng( this.get('lat'), this.get('lon'));
      var mapOptions = {
        zoom: this.get('zoom'),
        scaleControl: this.get('scaleControl'),
        center = currentLatLng
      }
      this.set('mapOptions', mapOptions);
  }
  return ApptMapModel;
});