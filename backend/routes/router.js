const express = require("express");
const router = express.Router();
const schemas = require('../models/schemas');



//GET USER
router.get('/user', async (req, res) => {
   const searchQuery = req.query;
   const getUser = await schemas.User.find(searchQuery);
   try {
      res.send(getUser);
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});



//GET USER (ID)
router.get('/user/:id', async (req, res) => {
   const _id = req.params.id;
   const getUser = await schemas.User.findById(_id);
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
router.post('/user', async (req, res) => {
   const createUser = new schemas.User(req.body);
   try {
      await createUser.save();
      res.send(createUser)
   } catch (err) {
      res.status(500).send(err);
   }
   res.end()
});

//UPDATE USER
router.put('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const updateUser = await schemas.User.findByIdAndUpdate(_id, req.body, { new: true });
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
router.delete('/user/:id', async (req, res) => {
   try {
      const _id = req.params.id;
      const deleteUser = await schemas.User.findByIdAndDelete(_id, req.body, { new: true });
      if (!deleteUser) {
         return res.status(404).send();
      } else {
         res.send(deleteUser)
      }
   } catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router