const express = require("express");
const IdyUserRouter = express.Router();
const IdyUserSchema = require('../models/IdyUserSchema');
const jwt = require('jsonwebtoken');

require('dotenv/config')


//=================LOGIN USER=========================//

//CHECK IS LOGIN USER
/* IdyUserRouter.get('/IdyUser/LoggedUser', async (req, res) => {
   try {
      const searchQuery = req.query;
      const LoggedUser = await IdyUserSchema.User.findOne(searchQuery);
      if (LoggedUser) {
         const id = LoggedUser._id;
         const email = LoggedUser.individual.email;
         const token = jwt.sign({ id, email }, process.env.SECRET_KEY, { expiresIn: '1h' });
         LoggedUser.token = token;
         return res.send(LoggedUser);
      }
      res.send(false);
   } catch (err) {
      res.status(500).send(err);
   }
});
 */

//=================REGISTER USER=========================//

//CHECK IS REGISTER USER
/* IdyUserRouter.get('/IdyUser/RegistredUser', async (req, res) => {
   try {

      const searchQuery = req.query;
      const RegistredUser = await IdyUserSchema.User.findOne(searchQuery);
      if (RegistredUser) {
         RegistredUser.isRegistred = true;
      } else {
         RegistredUser.isRegistred = false;
      }

      res.send(RegistredUser);
   } catch (err) {
      res.status(500).send(err);
   }
}); */
//=================USER=========================//

//GET USERS
IdyUserRouter.get('/IdyUser', async (req, res) => {
   try {
      const searchQuery = req.query;
      if (Object.keys(searchQuery).length === 0) {
         const data = await IdyUserSchema.User.find(searchQuery);
         res.send(data);
      } else {
         const RegistredUser = await IdyUserSchema.User.findOne(searchQuery);
         if (RegistredUser) {
            RegistredUser.isRegistred = true;
            res.send(RegistredUser);
            console.log('Yes')
         } else {
            RegistredUser.isRegistred = false;
            res.send(RegistredUser);
            console.log('No')
         }

      }
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER
IdyUserRouter.get('/IdyUser/:id', async (req, res) => {
   const id = req.params.id;
   const data = await IdyUserSchema.User.findById(id);
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
IdyUserRouter.post('/IdyUser', async (req, res) => {
   try {
      const data = new IdyUserSchema.User(req.body);
      await data.save();
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
IdyUserRouter.put('/IdyUser/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const data = await IdyUserSchema.User.findByIdAndUpdate(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});

//DELETE USER
IdyUserRouter.delete('/IdyUser/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const data = await IdyUserSchema.User.findByIdAndDelete(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});


module.exports = IdyUserRouter