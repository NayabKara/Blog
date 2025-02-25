const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    require: true

  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  }
}, {
  timstamp: true,
  toJSON: {
    transform: function(doc, ret){
      delete ret.password;
      return ret
    }

  }

})

module.exports = mongoose.model('User', userSchema)