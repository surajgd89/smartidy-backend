const express = require("express");
const router = express.Router();
const schemas = require('../models/schemas');

router.get('/users', async (req, res) => {
   const users = await schemas.Users.find({});
   res.send(users);
})

router.post('/users', async (req, res) => {
   try {
      const newUser = new schemas.Users(req.body);
      const saveUser = await newUser.save();
      if (saveUser) {
         res.send(saveUser)
      } else {
         console.log("User already register");
      }
   } catch (e) {
      res.send("Something Went Wrong");
   }
   res.end()
})


module.exports = router