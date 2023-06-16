const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const schemaLogin = new Schema({
   entryDate: {
      type: Date,
      default: Date.now
   },
   email: { type: String },
   password: { type: String },
});



const Login = mongoose.model('Login', schemaLogin, 'login');


const SCH_Login = { 'Login': Login, }


module.exports = SCH_Login