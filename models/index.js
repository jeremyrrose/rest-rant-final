const mongoose = require('mongoose')
require('dotenv').config()

// MONGOOSE CONNECT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(res => console.log("connected at:", process.env.MONGO_URI))
  .catch(err => console.log(err))

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')