var SearchModel = Backbone.Model.extend({
  mapViewTemplate: '',
  searchResultsID: 'searchResultsID',
  searchButtonID: 'searchButton',
  priceLabel: 'Price',
  priceFrom: { id: 'priceFrom', placeholder: 'From' },
  priceTo:{ id: 'priceTo', placeholder: 'To' },
  bedrooms: { label: 'Bedrooms', id: 'bedrooms', placeholder: '...' },
  bathroomsLabel: 'Bathrooms',
  fullBathrooms: { id: 'fullBathrooms', placeholder: 'full' },
  halfBathrooms: { id: 'halfBathrooms', placeholder: 'half' },
  garbageInc: { id: 'garbageInc', text: 'Garbage' },
  heatInc: { id: 'heatInc' , text: 'Heat' },
  waterInc: { id: 'waterInc', text: 'Water' },
  electricInc: { id: 'electricInc', text: 'Electric' },
  internetInc: { id: 'internetInc', text: 'Internet' },
  catAllowed: { id: 'catAllowed', text: 'Cats' },
  dogAllowed: { id: 'dogAllowed', text: 'Dogs' },
  smokingAllowed: { id: 'smokingAllowed', text: 'Smoking' },
  initialize: function(){
    this.mapModel = new MapModel();
    this.mapView = new MapView({ model: this.mapModel});
    this.listings = new ListingCollection();
    this.mapViewTemplate = Handlebars.templates.mapView(this.mapModel);
    _.bindAll(this, 'fetchListings', 'renderMap', 'setPoints', 'setPoint', 'search');
  },
  fetchListings: function(){
    this.listings.fetch({
      success: this.setPoints
    });
  },
  renderMap: function(){
    $.when(this.mapView.renderMap()).then(this.fetchListings);
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
      case 2: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/red_MarkerL.png'
                }); 
              break;
      case 3: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/red_MarkerS.png'
                }); 
              break;
      case 4: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/blue_MarkerA.png'
                }); 
              break;
      case 5: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/blue_MarkerL.png'
                }); 
              break;
      case 6: marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.get('lat'), model.get('lon')),
                icon: 'public/markers/blue_MarkerS.png'
                }); 
              break;
      default: marker.icon = 'public/markers/red_MarkerA.png';
    };
    
    marker.setMap(this.mapModel.get('map'));
    marker.model = model;
    model.set('marker', marker);
    model.set('isOnMap', true);
    google.maps.event.addListener(marker, 'click', model.emitMarkerClick);
  },
  search: function(event){
    //TODO
    
  }
})