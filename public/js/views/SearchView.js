var SearchView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'render', 'renderSelection');
    this.listenTo( this.model.listings, 'markerClicked', this.renderSelection);
  },
  render: function(){
    this.$el.html( Handlebars.templates.searchView(this.model));
    return this;
  },
  renderSelection: function(item){
    $('#'+this.model.searchResultsID).html( Handlebars.templates.listingViewComplete(item.attributes) );
  }
})