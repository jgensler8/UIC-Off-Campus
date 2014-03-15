define([
  'jquery',
  'underscore',
  'Backbone',
  'gmaps'
  ],
function( $, _, Backbone, gmaps){
  var ApptMapView = Backbone.View.extend({
    defaults:{
      lat: 41.871850,
      lon: -87.649250
    },
    el: '#ApptMap',
    initialize: function(){
      var map;
      this.model.set('map', gmaps.Map( this.el, this.model.get('mapOptions')));
      //this.render();
    },
    render: function(){
      this.$el
      return this;
    }
  });
  return ApptMapView;
});