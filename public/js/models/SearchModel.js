var SearchModel = Backbone.Model.extend({
  initialize: function(){
    this.mapModel = new MapModel();
    this.mapView = new MapView({ model: this.mapModel});
    this.listings = new ListingCollection();
    this.mapViewTemplate = Handlebars.templates.mapView(this.mapModel);
  }
})