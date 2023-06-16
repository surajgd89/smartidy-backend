const express = require("express");
const routerRegister = express.Router();

const schemaRegister = require('../models/schemaRegister');


//=================REGISTER=========================//

//GET USER
routerRegister.get('/register', async (req, res) => {
   const searchQuery = req.query;
   const getUser = await schemaRegister.Register.find(searchQuery);
   try {
      res.send(getUser);
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});

//GET USER (ID)
routerRegister.get('/register/:id', async (req, res) => {
   const _id = req.params.id;
   const getUser = await schemaRegister.Register.findById(_id);
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
routerRegister.post('/register', async (req, res) => {
   const createUser = new schemaRegister.Register(req.body);
   try {
      await createUser.save();
      res.send(createUser)
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});

//UPDATE USER
routerRegister.put('/register/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const updateUser = await schemaRegister.Register.findByIdAndUpdate(_id, req.body, { new: true });
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
routerRegister.delete('/register/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const deleteUser = await schemaRegister.Register.findByIdAndDelete(_id, req.body, { new: true });
      if (!deleteUser) {
         return res.status(404).send();
      } else {
         res.send(deleteUser)
      }
   } catch (err) {
      res.status(500).send(err);
   }
});


module.exports = routerRegister