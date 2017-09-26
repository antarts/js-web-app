var mongoose = require('mongoose');
var memberSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  words: String,
  github: String,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
mongoose.model('Member', memberSchema);
