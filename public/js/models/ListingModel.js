var ListingModel = Backbone.Model.extend({
  urlRoot: 'listing',
  legendTitle: '',

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
  electricityInc: { value: false, name: 'electricityInc' },
  internetInc: { value: false, name: 'internetInc' },
  squareFeet: { value: 0, name: 'squareFeet' },
  catAllowed: { value: false, name: 'catAllowed' },
  dogAllowed: { value: false, name: 'dogAllowed' },
  smokingAllowed: { value: false, name: 'smokingAllowed' },

  initialize: function(){
    
  }
})