const express = require("express");
const userRouter = express.Router();
const userSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken');
require('dotenv/config')


//=================USER=========================//

//GET USER
userRouter.get('/user', async (req, res) => {
   try {
      const searchQuery = req.query;
      const user = await userSchema.User.find(searchQuery);
      res.send(user);
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER (ID)
userRouter.get('/user/:id', async (req, res) => {
   const _id = req.params.id;
   const user = await userSchema.User.findById(_id);
   try {
      if (!user) {
         return res.status(404).send('User not found');
      }
      res.send(user);
   } catch (error) {
      res.status(500).send(err);
   }
});

//CREATE USER
userRouter.post('/user', async (req, res) => {
   try {
      const existingUser = await userSchema.User.findOne({ 'individual.email': req.body.individual.email });
      if (existingUser) {
         return res.status(400).send({ error: 'Email is already registered' });
      }
      const user = new userSchema.User(req.body);
      await user.save();
      res.send(user);
   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
userRouter.put('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const user = await userSchema.User.findByIdAndUpdate(_id, req.body, { new: true });

      if (!user) {
         return res.status(404).send('User not found');
      }

      if (req.body.isLoggedIn) {
         const payload = { id: req.body._id, email: req.body.individual.email }
         const secretKey = process.env.SECRET_KEY;
         const expiresIn = '5m';
         const token = jwt.sign(payload, secretKey, { expiresIn });
         res.send({ token: token })
      } else {
         res.send(user)
      }

   } catch (err) {
      res.status(500).send(err);
   }
});

//DELETE USER
userRouter.delete('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const user = await userSchema.User.findByIdAndDelete(_id, req.body, { new: true });
      if (!user) {
         return res.status(404).send('User not found');
      }
      res.send(user)
   } catch (err) {
      res.status(500).send(err);
   }
});


module.exports = userRouter