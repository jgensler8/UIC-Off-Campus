var mongoose = require('mongoose;);

exports.listing = mogoose.model('appt_listing', new Schema({
  listingID: Number,
  listingType: Number,
  postedByID: Number,
  postDate: Date,
  expireDate: Date,
  address: {
    lat: Number,
    lon: Number,
    addrNum: Number,
    addrStreet: String,
    addrAptNum: Number,
    addrCity: String,
    addrZip: Number,
    addrState: String
  },
  features: {
    price: Number,
    squareFeet: Number,
    bathrooms: {
      full: Number,
      half: Number
    },
    utilities:{
      garbageInc: Boolean,
      heatInc, Boolean,
      waterInc, Boolean,
      elecInc, Boolean
    },
    bedrooms: Number,
    catAllowed: Boolean,
    dogAllowed: Boolean,
    smokingAllowed: Boolean
  } 
}));
