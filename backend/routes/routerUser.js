const express = require("express");
const routerUser = express.Router();


const schemaUser = require('../models/schemaUser');


//=================USER=========================//

//GET USER
routerUser.get('/user', async (req, res) => {
   const searchQuery = req.query;
   const getUser = await schemaUser.User.find(searchQuery);
   try {
      res.send(getUser);
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});

//GET USER (ID)
routerUser.get('/user/:id', async (req, res) => {
   const _id = req.params.id;
   const getUser = await schemaUser.User.findById(_id);
   try {
      if (!getUser) {
         return res.status(404).send();
      } else {
         res.send(getUser);
      }
   } catch (error) {
      res.send(err);
   }
   res.end()
});

//CREATE USER
routerUser.post('/user', async (req, res) => {
   const createUser = new schemaUser.User(req.body);
   try {
      await createUser.save();
      res.send(createUser)
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});

//UPDATE USER
routerUser.put('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const updateUser = await schemaUser.User.findByIdAndUpdate(_id, req.body, { new: true });
      if (!updateUser) {
         return res.status(404).send();
      } else {
         res.send(updateUser)
      }
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
         return res.status(404).send();
      } else {
         res.send(deleteUser)
      }
   } catch (err) {
      res.status(500).send(err);
   }
});


module.exports = routerUser