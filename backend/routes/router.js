const express = require("express");
const router = express.Router();
const userSchema = require('../models/userSchema');

require('dotenv/config')


//=================USER=========================//

//GET USERS
router.get('/user', async (req, res) => {
   try {
      const searchQuery = req.query;
      const data = await userSchema.User.find(searchQuery);
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER
router.get('/user/:id', async (req, res) => {
   const id = req.params.id;
   const data = await userSchema.User.findById(id);
   try {

      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data);

   } catch (err) {
      res.status(500).send(err);
   }
});

//CREATE USER
router.post('/user', async (req, res) => {
   try {

      const existingUser = await userSchema.User.findOne({ 'individual.email': req.body.individual.email });
      if (existingUser) {
         return res.send({ error: true });
      }

      const data = new userSchema.User(req.body);
      await data.save();
      res.send(data);
      console.log(req.body)

   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
router.put('/user/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const data = await userSchema.User.findByIdAndUpdate(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});

//DELETE USER
router.delete('/user/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const data = await userSchema.User.findByIdAndDelete(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});


module.exports = router