const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaRegister = new Schema({
   entryDate: {
      type: Date,
      default: Date.now
   },
   name: { type: String },
   email: { type: String, unique: true },
   mobile: { type: String },
   password: { type: String },
});

const Register = mongoose.model('Register', schemaRegister, 'register');


const SCH_Register = { 'Register': Register }


module.exports = SCH_Register