const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaUser = new Schema({
   entryDate: {
      type: Date,
      default: Date.now
   },
   userId: { type: String, },
   status: { type: String },
   password: { type: String },
   individual: {
      name: { type: String },
      dob: { type: Date },
      experties: { type: String },
      profilePic: { type: String },
      call: { type: String },
      email: { type: String, unique: true },
      sms: { type: String },
      chat: [
         {
            title: { type: String },
            value: { type: String },
         }
      ]
   },
   business: {
      name: { type: String },
      logo: { type: String },
      estDate: { type: Date },
      call: { type: String },
      sms: { type: String },
      email: { type: String },
      designation: { type: String },
      gstin: { type: String },
      msme: { type: String },
      fssai: { type: String },
      address: { type: String },
      mapUrl: { type: String },
      website: { type: String },
      upiId: { type: String },
      paymentGateway: {
         logo: { type: String },
         url: { type: String },
      },
      bankAccount: {
         name: { type: String },
         bank: { type: String },
         number: { type: String },
         ifsc: { type: String },
         type: { type: String },
         branch: { type: String },
      },
      about: { type: Array },
      services: { type: Array },
      eFiles: [
         {
            title: { type: String },
            url: { type: String },
         }
      ],
      links: [
         {
            title: { type: String },
            url: { type: String },
         }
      ],
      chat: [
         {
            title: { type: String },
            value: { type: String },
         }
      ],
      gallery: { type: Array },
      videos: [
         {
            title: { type: String },
            url: { type: String },
         }
      ],
      workingDayHrs: [
         {
            day: { type: String },
            openAt: { type: String },
            closesAt: { type: String },
            working: { type: Boolean },
         }
      ],
      media: {
         src: { type: String },
         title: { type: String },
         data: { type: String },
         url: { type: String },
      }
   },
   social: {
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      telegram: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      catalogue: { type: String },
   },
   config: {
      smartIdyUrl: { type: String },
      language: { type: String },
      isBusinessProfile: { type: Boolean },
      isPicTypeCircle: { type: Boolean },
      theme: {
         primaryColor: { type: String },
         titleColor: { type: String },
      }
   }
})

const User = mongoose.model('User', schemaUser, 'user');

const SCH_User = { 'User': User, }

module.exports = SCH_User