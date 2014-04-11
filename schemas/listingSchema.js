var mongoose = require('mongoose');
/*
listing type: 1 trying to sell a whole appt
listing type: 2 trying to sell a room for the long term
listing type: 3 trying to sell a room for the short term

listing type: 51 looking for an appartment in long term
listing type: 52 looking for a room in the long term
listing type: 53 looking for a room in the short term
*/
exports.listing = mongoose.model('listing', new mongoose.Schema({
  listingType: {
    type: Number,
    required: true
  },
  postedById: {
    type: String,
    required: true
  },
  postedByName: {
    type: String,
    required: true
  },
  postDate: {
    type: Date,
    required: true,
  },
  availableFromDate: {
    type: Date,
    required: true,
  },
  availableToDate: {
    type: Date,
    required: true,
  },

  addrLine: {
    type: String,
    required: true
  },
  addrAptNum: String,
  addrCity: {
    type: String,
    required: true
  },
  addrZip: {
    type: Number,
    required: true
  },
  addrState: {
    type: String,
    required: true
  },

  contactEmail:{
    type: String,
    required: true
  },

  lat: Number,
  lon: Number,

  price: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  fullBathrooms: {
    type: Number,
    required: true
  },
  halfBathrooms: {
    type: Number,
    required: true
  },
  garbageInc: Boolean,
  heatInc: Boolean,
  waterInc: Boolean,
  electricInc: Boolean,
  internetInc: Boolean,
  squareFeet: Number,
  catAllowed: Boolean,
  dogAllowed: Boolean,
  smokingAllowed: Boolean,

  likes: {
     type: [String]
  }
}, {strict: true, collection: 'listings'}));
