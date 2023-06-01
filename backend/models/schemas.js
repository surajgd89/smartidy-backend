const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
   password: { type: String },
   individual: {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true
      },
      call: {
         type: String,
         required: true,
      },
   },
   entryDate: {
      type: Date,
      default: Date.now
   }
})
const Users = mongoose.model('Users', usersSchema, 'users');
const mySchemas = { 'Users': Users }

module.exports = mySchemas