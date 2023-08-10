const express = require("express");
const router = express.Router();
const schema = require('../models/schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyUser = require('./authVerify')
require('dotenv/config')

//REGISTER REQUEST
router.get('/idyUser/registerRequest', async (req, res) => {
   const query = req.query;
   try {

      const registredUser = await schema.User.findOne(query);

      if (!registredUser) {
         return res.send({ success: false, message: "Email Address is not Registered" });
      }

      res.send({ success: true, message: "Email Already Registred" });

   } catch (err) {
      res.status(500).send(err);
   }
});

//LOGIN REQUEST
router.post('/idyUser/loginRequest', async (req, res) => {
   try {
      const email = req.body.email;
      const password = req.body.password;

      const registredUser = await schema.User.findOne({ 'individual.email': email });

      if (!registredUser) {
         return res.send({ success: false, message: "Incorrect email or password" });
      }

      const isMatch = await bcrypt.compare(password, registredUser.password);

      if (!isMatch) {
         return res.send({ success: false, message: "Incorrect email or password" });
      }

      const id = registredUser._id;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET);
      res.header("Auth-Token", token).send({ success: true, token: token, id: id });


   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USERS
router.get('/idyUser', async (req, res) => {
   try {
      const query = req.query;
      const data = await schema.User.find(query);
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//CREATE USER
router.post('/idyUser', async (req, res) => {
   try {
      const data = new schema.User(req.body);
      await data.save();
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER
router.get('/idyUser/:id', verifyUser, async (req, res) => {
   const id = res.user.id;
   const data = await schema.User.findById(id);
   try {
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
router.put('/idyUser/:id', verifyUser, async (req, res) => {

   try {
      const id = res.user.id;
      const data = await schema.User.findByIdAndUpdate(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});

//DELETE USER
router.delete('/idyUser/:id', verifyUser, async (req, res) => {
   try {
      const id = res.user.id;
      const data = await schema.User.findByIdAndDelete(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router