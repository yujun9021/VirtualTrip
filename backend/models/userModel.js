const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: String,
  address: String,
  email: String,
  phone: String,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
