var SearchView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'render', 'renderSelection', 'search', 'showAsMap', 'showAptList', 'showSocialList');
    this.listenTo( this.model.listings, 'markerClicked', this.renderSelection);
  },
  events: {
    'click [id="searchButton"]': 'search',
    'click [id="showAsMap"]': 'showAsMap',
    'click [id="showAptList"]': 'showAptList',
    'click [id="showSocialList"]': 'showSocialList',
  },
  render: function(){
    this.$el.html( Handlebars.templates.searchView(this.model));
    return this;
  },
  renderSelection: function(item){
    console.log(item);
    
    $('#'+this.model.searchResultsID).html( Handlebars.templates.listingViewComplete(item.attributes) );
    $(document).foundation('reflow');
    $('#mapListingModal').foundation('reveal','open');
  },
  search: function(){
    this.model.search();
  },
  showAsMap: function(){
    $.when( $('#main-section').html(this.model.mapViewTemplate) ).then( this.model.renderMap() );
  },
  showAptList: function(){
    $('#main-section').html( Handlebars.templates.searchView_apptList( { listings: this.model.listings.models} ) );
  },
  showSocialList: function(){
    $('#main-section').html( Handlebars.templates.searchView_socialList( { listings: this.model.listings.models}) );
  }
})