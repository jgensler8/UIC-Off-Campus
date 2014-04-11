var ListingModel = Backbone.Model.extend({
  urlRoot: 'listing',
  defaults: {
    legendTitle: '',
    isOnMap: false,

    listingType: 1,
    postedByName: '',
    postedById: '',
    postDate: '',
    availableFromDate: '',
    availableToDate: '',
    addrLine: '',
    addrAptNum: '',
    addrCity: '',
    addrZip: '',
    addrState: '',
    lat: 0,
    lon: 0,
    price: 0,
    bedrooms: 0,
    fullBathrooms: 0,
    halfBathrooms: 0,
    garbageInc: false,
    heatInc: false,
    waterInc: false,
    electricInc: false,
    internetInc: false,
    squareFeet: false,
    catAllowed: false,
    dogAllowed: false,
    smokingAllowed: false,
  },
  submitMessages: {
    error: [
      { name: "DATABASE", message: "There is an error saving your listing. Try again later"},
      { name: "GEOCODE", message: "There is an error geocoding your listing. Please edit your address"},
      { name: "LIMIT", message: "There is an error in the limit of listings you can post. The limit is 5."},
      ],
    success: [
      { name: "SUCCESS", message: "Congrats! Your listing was successfully posted!"}
      ]
  },
  initialize: function(){
    _.bindAll(this, 'emitMarkerClick');
  },
  emitMarkerClick: function(){
    //console.log("clicked");
    this.trigger('markerClicked', this);
  }
})