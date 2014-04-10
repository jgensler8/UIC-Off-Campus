var SearchView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'render', 'renderSelection', 'search', 'showAsMap', 'showApptList', 'showSocialList');
    this.listenTo( this.model.listings, 'markerClicked', this.renderSelection);
  },
  events: {
    'click [id="searchButton"]': 'search',
    'click [id="showAsMap"]': 'showAsMap',
    'click [id="showApptList"]': 'showApptList',
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
    $('#mapListingModal'+event.target.id).foundation('reveal','open');
  },
  search: function(){
    this.model.search();
  },
  showAsMap: function(){
    $.when( $('#main-section').html(this.model.mapViewTemplate) ).then( this.model.renderMap() );
  },
  showApptList: function(){
    $('#main-section').html( Handlebars.templates.searchView_apptList(this.model.listings) );
  },
  showSocialList: function(){
    $('#main-section').html( Handlebars.templates.searchView_socialList(this.model.listings) );
  }
})