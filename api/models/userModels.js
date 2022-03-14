const mongoose = require('mongoose')

const User = new mongoose.Schema({
  img: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/236/236831.png',
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
    default: 'member',
  },
  createDate: {
    type: String,
    default:()=>new Date,
  },
})

module.exports = mongoose.model('user', User)