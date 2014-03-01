var mongoose = require('mongoose;);

module.exports = mogoose.model('appt_listing', {
  listingID: Number,
  postDate: Date,
  expireDate: Date,
  Detials: String
});
