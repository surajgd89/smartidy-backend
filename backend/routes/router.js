const express = require("express");
const router = express.Router();
const schemas = require('../models/schemas');

router.get('/users', async (req, res) => {
   const getUsers = new schemas.Users(req.body);
   const saveUsers = await getUsers.save();
   res.send(saveUsers);
})

router.post('/users', async (req, res) => {
   try {
      const newUser = new schemas.Users(req.body);
      const saveUser = await newUser.save();
      if (saveUser) {
         res.send(newUser)
      } else {
         console.log("User already register");
      }
   } catch (e) {
      res.send("Something Went Wrong");
   }
   res.end()
})


module.exports = router