var mongoose = require('mongoose');
var userSchema = {
  spotifyId: String
};

var User = mongoose.model('User', userSchema);

module.exports = User;
