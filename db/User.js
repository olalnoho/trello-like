const mongoose = require('mongoose')

/*
   id SERIAL PRIMARY KEY,
   username VARCHAR(100) NOT NULL UNIQUE,
   email VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(60) NOT NULL,
   "name" VARCHAR(255) NOT NULL
*/
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },

   password: {
      type: String,
      required: true,
      select: false
   },
   name: {
      type: String,
      required: true
   }
})

const User = mongoose.model('User', userSchema)
module.exports = User