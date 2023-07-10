const express = require("express");
const idyUserRouter = express.Router();
const idyUserSchema = require('../models/idyUserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv/config')

//=================LOGIN USER=========================//

idyUserRouter.post('/idyUser/logInUser', async (req, res) => {
   try {
      const email = req.body.email;
      const password = req.body.password;

      const registredUser = await idyUserSchema.User.findOne({ 'individual.email': email });
      if (!registredUser) {
         return res.status(404).send(false);
      }

      const isValidUser = await bcrypt.compare(password, registredUser.password);

      if (!isValidUser) {
         return res.status(401).send(false);
      }
      const id = registredUser._id;
      const token = jwt.sign({ id, email }, process.env.SECRET_KEY, { expiresIn: '1h' });
      res.send({ token });

   } catch (err) {
      res.status(500).send(err);
   }

});


//=================REGISTER USER=========================//

idyUserRouter.get('/idyUser/registredUser', async (req, res) => {
   const searchQuery = req.query;
   try {
      if (Object.keys(searchQuery).length > 0) {
         const registredUser = await idyUserSchema.User.findOne(searchQuery);
         if (registredUser) {
            res.send(registredUser);
         } else {
            res.send(false);
         }
      } else {
         res.send("Enter searchQuery In URL =?individual.email=example@gmail.com");
      }
   } catch (err) {
      res.status(500).send(err);
   }
});

//=================USER=========================//

//GET USERS
idyUserRouter.get('/IdyUser', async (req, res) => {
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