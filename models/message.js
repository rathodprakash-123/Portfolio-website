const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  number:Number,
  message: String,
});

module.exports = mongoose.model('Message', messageSchema);
