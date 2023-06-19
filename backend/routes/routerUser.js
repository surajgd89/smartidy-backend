const express = require("express");
const routerUser = express.Router();


const schemaUser = require('../models/schemaUser');





//=================USER=========================//

//GET USER
routerUser.get('/user', async (req, res) => {
   try {
      const searchQuery = req.query;
      const getUser = await schemaUser.User.find(searchQuery);
      res.send(getUser);
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER (ID)
routerUser.get('/user/:id', async (req, res) => {
   const _id = req.params.id;
   const getUser = await schemaUser.User.findById(_id);
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
routerUser.post('/user', async (req, res) => {
   try {
      const existingUser = await schemaUser.User.findOne({ 'individual.email': req.body.individual.email });
      if (existingUser) {
         return res.status(400).send({ error: 'Email is already registered' });
      }
      const newUser = new schemaUser.User(req.body);
      await newUser.save();
      res.send(newUser);
   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
routerUser.put('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const updateUser = await schemaUser.User.findByIdAndUpdate(_id, req.body, { new: true });

      if (!updateUser) {
         return res.status(404).send('User not found');
      }
      res.send(updateUser)
   } catch (err) {
      res.status(500).send(err);
   }
});

//DELETE USER
routerUser.delete('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const deleteUser = await schemaUser.User.findByIdAndDelete(_id, req.body, { new: true });
      if (!deleteUser) {
         return res.status(404).send('User not found');
      }
      res.send(deleteUser)
   } catch (err) {
      res.status(500).send(err);
   }
});


module.exports = routerUser