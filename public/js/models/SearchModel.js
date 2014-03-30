var SearchModel = Backbone.Model.extend({
  mapViewTemplate: '',
  searchResultsID: 'searchResultsID',
  initialize: function(){
    this.mapModel = new MapModel();
    this.mapView = new MapView({ model: this.mapModel});
    this.listings = new ListingCollection();
    this.mapViewTemplate = Handlebars.templates.mapView(this.mapModel);
    _.bindAll(this, 'fetchListings', 'renderMap', 'setPoints', 'setPoint');
    this.listenTo( this.mapModel, 'change', this.fetchListings);
  },
  fetchListings: function(){
    this.listings.fetch({
      success: this.setPoints
    });
  },
  renderMap: function(){
    this.mapView.renderMap();
  },
  setPoints: function(){
    this.listings.each(this.setPoint);
  },
  setPoint: function(model){
    var marker;
    new google.maps.Marker({
      position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
      icon: 'public/markers/red_MarkerA.png'
    });
    
    switch(model.attributes.listingType){
      case 1: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/red_MarkerA.png'
                }); 
              break;
      case 1: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/red_MarkerB.png'
                }); 
              break;
      case 1: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/red_MarkerC.png'
                }); 
              break;
      case 1: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/blue_MarkerA.png'
                }); 
              break;
      case 1: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/blue_MarkerB.png'
                }); 
              break;
      case 1: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/blue_MarkerC.png'
                }); 
              break;
      default: marker.icon = 'public/markers/red_MarkerA.png';
    };
    
    marker.setMap(this.mapModel.get('map'));
    console.log(model.attributes);
    marker.model = model;
    model.set('marker', marker);
    google.maps.event.addListener(marker, 'click', model.emitMarkerClick);
  }
})