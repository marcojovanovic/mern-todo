const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  goals: {
    type: Number,
    required: true,
  },
  desc:{
    type:String,
    required:false
  }

});


module.exports = mongoose.model('Player', PlayerSchema)
