var ListingCollection = Backbone.Collection.extend({
  model: 'ListingModel',
  url: 'listing/all',
  initialize: function(){
    //this.fetch();
  }
})
