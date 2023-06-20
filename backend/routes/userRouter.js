const express = require("express");
const userRouter = express.Router();
const userSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken');

//=================USER=========================//

//GET USER
userRouter.get('/user', async (req, res) => {
   try {
      const searchQuery = req.query;
      const getUser = await userSchema.User.find(searchQuery);
      res.send(getUser);
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER (ID)
userRouter.get('/user/:id', async (req, res) => {
   const _id = req.params.id;
   const getUser = await userSchema.User.findById(_id);
   try {
      if (!getUser) {
         return res.status(404).send('User not found');
      }
      res.send(getUser);
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
      const newUser = new userSchema.User(req.body);
      await newUser.save();



      res.send(newUser);
   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
userRouter.put('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const updateUser = await userSchema.User.findByIdAndUpdate(_id, req.body, { new: true });

      if (!updateUser) {
         return res.status(404).send('User not found');
      }


      if (req.body.isLoggedIn) {
         const email = req.body.individual.email
         const payload = { email };
         const secretKey = 'smartidy';
         const expiresIn = '30m';
         const token = jwt.sign(payload, secretKey, { expiresIn });
         res.send(updateUser, { token })
      }
      res.send(updateUser)
   } catch (err) {
      res.status(500).send(err);
   }
});

//DELETE USER
userRouter.delete('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const deleteUser = await userSchema.User.findByIdAndDelete(_id, req.body, { new: true });
      if (!deleteUser) {
         return res.status(404).send('User not found');
      }
      res.send(deleteUser)
   } catch (err) {
      res.status(500).send(err);
   }
});




module.exports = userRouter