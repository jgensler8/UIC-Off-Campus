define([
  'jquery',
  'underscore',
  'Backbone',
  'router',
], function( $, _, Backbone, router){
  var initialize = function(){
    router.initialize();
  }
  return {
    initialize: initialize
  }
});
