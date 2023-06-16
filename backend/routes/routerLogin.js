const express = require("express");
const routerLogin = express.Router();
const schemaLogin = require('../models/schemaLogin');

//=================LOGIN=========================//

//GET USER
routerLogin.get('/login', async (req, res) => {
   const searchQuery = req.query;
   const getUser = await schemaLogin.Login.find(searchQuery);
   try {
      res.send(getUser);
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});

//GET USER (ID)
routerLogin.get('/login/:id', async (req, res) => {
   const _id = req.params.id;
   const getUser = await schemaLogin.Login.findById(_id);
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
routerLogin.post('/login', async (req, res) => {
   const createUser = new schemaLogin.Login(req.body);
   try {
      await createUser.save();
      res.send(createUser)
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});

//UPDATE USER
routerLogin.put('/login/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const updateUser = await schemaLogin.Login.findByIdAndUpdate(_id, req.body, { new: true });
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
routerLogin.delete('/login/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const deleteUser = await schemaLogin.Login.findByIdAndDelete(_id, req.body, { new: true });
      if (!deleteUser) {
         return res.status(404).send();
      } else {
         res.send(deleteUser)
      }
   } catch (err) {
      res.status(500).send(err);
   }
});


module.exports = routerLogin