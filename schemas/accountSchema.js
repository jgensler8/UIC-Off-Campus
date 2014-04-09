var mongoose = require('mongoose');

exports.account = mongoose.model('account', new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  netid: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  firstName: String,
  lastName: String,
  facebookid: String,
},{strict: true, collection: 'accounts'}));