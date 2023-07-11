const express = require("express");
const idyUserRouter = express.Router();
const idyUserSchema = require('../models/idyUserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const verifyUser = require('./authVerify')

require('dotenv/config')

//=================LOGIN USER=========================//

idyUserRouter.post('/idyUser/logInUser', async (req, res) => {
   try {
      const email = req.body.email;
      const password = req.body.password;

      const registredUser = await idyUserSchema.User.findOne({ 'individual.email': email });

      if (!registredUser) {
         return res.send({ success: false, message: "Incorrect email or password" });
      }

      const isMatch = await bcrypt.compare(password, registredUser.password);

      if (!isMatch) {
         return res.send({ success: false, message: "Incorrect email or password" });
      }

      const id = registredUser._id;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET);
      res.header("Auth-Token", token).send({ success: true, token: token });

   } catch (err) {
      res.status(500).send(err);
   }

});


//=================REGISTER USER=========================//

idyUserRouter.get('/idyUser/registredUser', async (req, res) => {
   const searchQuery = req.query;
   try {

      const registredUser = await idyUserSchema.User.findOne(searchQuery);

      if (!registredUser) {
         return res.send({ success: false, message: "Email Already Registred" });
      }
      res.send({ success: true, message: "Email Already Registred" });
   } catch (err) {
      res.status(500).send(err);
   }
});

//=================USER=========================//

//GET USERS
idyUserRouter.get('/IdyUser', verifyUser, async (req, res) => {
   try {
      const searchQuery = req.query;
      const data = await idyUserSchema.User.find(searchQuery);
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER
idyUserRouter.get('/idyUser/:id', async (req, res) => {
   const id = req.params.id;
   const data = await idyUserSchema.User.findById(id);
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
idyUserRouter.post('/idyUser', async (req, res) => {
   try {
      const data = new idyUserSchema.User(req.body);
      const password = req.body.password;
      const hashedPassword = await bcrypt.hash(password, 10);
      data.password = hashedPassword;
      await data.save();
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
idyUserRouter.put('/idyUser/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const data = await idyUserSchema.User.findByIdAndUpdate(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});

//DELETE USER
idyUserRouter.delete('/idyUser/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const data = await idyUserSchema.User.findByIdAndDelete(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});

module.exports = idyUserRouter