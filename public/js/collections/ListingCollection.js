var ListingCollection = Backbone.Collection.extend({
  model: ListingModel,
  url: 'listing',
  initialize: function(){
    this.fetch();
  }
})
