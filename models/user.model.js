const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userid: Number,
  email: String,
  first_name: String,
  last_name: String,
  username: String,
  contact: String,
  password: String,
  role: String,
  isLoggedIn: Boolean,
  uuid: String,
  accesstoken: String,
  coupens: Array,
  bookingRequests: Array
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
