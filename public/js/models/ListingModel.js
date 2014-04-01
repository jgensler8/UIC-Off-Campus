var ListingModel = Backbone.Model.extend({
  urlRoot: 'listing',
  legendTitle: '',
  isOnMap: false,

  listingType: { value: 1, name: 'listingType' },
  postedBy: { value: '', name: 'postedBy' },
  postDate: { value: '', name: 'postDate' },
  availableFromDate: { value: null, name: 'availableFromDate' },
  availableToDate: { value: null, name: 'availableToDate' },
  addrLine: { value: '', name: 'addrLine' },
  addrAptNum: { value: '', name: 'addrAptNum' },
  addrCity: { value: '', name: 'addrCity' },
  addrZip: { value: '', name: 'addrZip'},
  addrState: { value: '', name: 'addrState' },
  lat: { value: 0, name: 'lat'},
  lon: { value: 0, name: 'lon'},
  price: { value: 0, name: 'price' },
  bedrooms: { value: 0, name: 'bedrooms' },
  fullBathrooms: { value: 0, name: 'fullBathrooms' },
  halfBathrooms: { value: 0, name: 'halfBathrooms' },
  garbageInc: { value: false, name: 'garbageInc' },
  heatInc: { value: false, name: 'heatInc' },
  waterInc: { value: false, name: 'waterInc' },
  electricInc: { value: false, name: 'electricInc' },
  internetInc: { value: false, name: 'internetInc' },
  squareFeet: { value: 0, name: 'squareFeet' },
  catAllowed: { value: false, name: 'catAllowed' },
  dogAllowed: { value: false, name: 'dogAllowed' },
  smokingAllowed: { value: false, name: 'smokingAllowed' },
  errorSubmitMessages: [
    { name: "DATABASE", message: "There is an error saving your listing. Try again later"},
    { name: "GEOCODE", message: "There is an error geocoding your listing. Please edit your address"},
    { name: "LIMIT", message: "There is an error in the limit of listings you can post. The limit is 10."}
  ],
  initialize: function(){
    _.bindAll(this, 'emitMarkerClick');
  },
  emitMarkerClick: function(){
    console.log("clicked");
    //var infoWindow = new google.maps.InfoWindow({ content: this.get('price').toString()});
    //infoWindow.open( this.get('marker').map, this.get('marker'));
    this.trigger('markerClicked', this);
  }
})