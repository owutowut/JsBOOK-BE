const mongoose = require('mongoose')

const User = new mongoose.Schema({
  img: {
    type: String,
  },
  firstname: {
    type: String,
  },
  surename: {
    type: String,
  },
  email: {
    type: String,
  },
  tel: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
  createDate: {
    type: String,
  },
})

module.exports = mongoose.model('user', User)