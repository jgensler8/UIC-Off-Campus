var SearchView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'render', 'renderSelection', 'search');
    this.listenTo( this.model.listings, 'markerClicked', this.renderSelection);
  },
  events: {
    'click [id="searchButton"]': 'search'
  },
  render: function(){
    this.$el.html( Handlebars.templates.searchView(this.model));
    return this;
  },
  renderSelection: function(item){
    console.log(item);
    $('#'+this.model.searchResultsID).html( Handlebars.templates.listingViewComplete(item.attributes) );
  },
  search: function(){
    this.model.search();
  }
})