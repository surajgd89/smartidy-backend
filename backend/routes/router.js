const router = require("express").Router();
const schema = require('../models/schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyUser = require('./authVerify');
const nodemailer = require('nodemailer');
const multer = require('multer');

const handlebars = require('nodemailer-express-handlebars');
require('dotenv/config');

// ======================================UPLOADING FILES ==========================================//

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, './public/uploads/');
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
   }
});

const fileFilter = (req, file, cb) => {
   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 'application/vnd.ms-excel', 'application/msword', 'application/vnd.ms-powerpoint'];
   if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
   } else {
      cb(null, false);
   }
}

const upload = multer({ storage, fileFilter });


// ======================================ROUTER==========================================//

//FORGOT PASSWORD
router.post('/idyUser/resetPassword', async (req, res) => {
   const { email } = req.body;
   try {
      const registredUser = await schema.User.findOne({ 'individual.email': email });
      const id = registredUser._id;
      const mail = registredUser.individual.email;
      const now = Date.now();

      const resetToken = jwt.sign({ mail, id, now }, process.env.TOKEN_SECRET, { expiresIn: '300s' });
      const resetLink = `http://localhost:3000/reset-password?&token=${resetToken}`;


      let transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false,
         auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
         }
      });

      transporter.use('compile', handlebars({
         viewEngine: {
            extname: '.hbs',
            layoutsDir: 'views',
            defaultLayout: 'email-reset-password',
         },
         viewPath: 'views',
         extName: '.hbs'
      }));

      const message = {
         from: process.env.EMAIL,
         to: email,
         subject: 'SmartIDy Reset Password Link',
         template: 'email-reset-password',
         context: {
            email: email,
            resetLink: resetLink,
         }
      };

      transporter.sendMail(message, function (err, info) {
         if (err) {
            console.log("Error", err);
         } else {
            console.log("resetLink=" + resetLink);
            console.log("Email sent" + info.response);
            res.send({ success: true, response: info.response });
         }
      });

   } catch (err) {
      res.status(500).send(err);
   }
});

//VERIFY EMAIL
router.post('/idyUser/verifyEmail', async (req, res) => {
   const { email, otp } = req.body;
   try {

      let transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false,
         auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
         }
      });

      transporter.use('compile', handlebars({
         viewEngine: {
            extname: '.hbs',
            layoutsDir: 'views',
            defaultLayout: 'email-verify-otp',
         },
         viewPath: 'views',
         extName: '.hbs'
      }));


      const message = {
         from: process.env.EMAIL,
         to: email,
         subject: 'SmartIDy Verify Email OTP',
         template: 'email-verify-otp',
         context: {
            email: email,
            otp: otp,
         }
      };

      transporter.sendMail(message, function (err, info) {
         if (err) {
            console.log("Error", err);
         } else {
            console.log("OTP=" + otp);
            console.log("Email sent" + info.response);
            res.send({ success: true, response: info.response });
         }
      });

   } catch (err) {
      res.status(500).send(err);
   }
});

//REGISTER REQUEST
router.get('/idyUser/registerRequest', async (req, res) => {
   const query = req.query;
   try {

      const registredUser = await schema.User.findOne(query);

      if (!registredUser) {
         return res.send({ success: false, message: "Email Address is not Registered" });
      }

      res.send({ success: true, message: "Email Already Registred", user: registredUser });

   } catch (err) {
      res.status(500).send(err);
   }
});

//LOGIN REQUEST
router.post('/idyUser/loginRequest', async (req, res) => {
   try {
      const email = req.body.email;
      const password = req.body.password;

      const registredUser = await schema.User.findOne({ 'individual.email': email });

      if (!registredUser) {
         return res.send({ success: false, message: "Incorrect email or password" });
      }

      const isMatch = await bcrypt.compare(password, registredUser.password);

      if (!isMatch) {
         return res.send({ success: false, message: "Incorrect email or password", });
      }

      const id = registredUser._id;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.header("Auth-Token", token).send({ success: true, token: token, id: id });


   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USERS
router.get('/idyUser', async (req, res) => {
   try {
      const query = req.query;
      const data = await schema.User.find(query);
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//CREATE USER
router.post('/idyUser', async (req, res) => {
   try {
      const data = new schema.User(req.body);
      await data.save();
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//GET USER
router.get('/idyUser/:id', verifyUser, async (req, res) => {
   const id = res.user.id;
   const data = await schema.User.findById(id);
   try {
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data);
   } catch (err) {
      res.status(500).send(err);
   }
});

//UPDATE USER
router.put('/idyUser/:id', upload.any(), async (req, res) => {
   try {
      const id = req.body._id;
      const files = req.files;

      let profilePic, businessLogo, paymentGatewayLogo, mediaImg, galleryImg;

      const fieldnameToPathMap = {};

      files.forEach((file) => {
         fieldnameToPathMap[file.fieldname] = file.path;
      });

      for (const key in fieldnameToPathMap) {

         if (fieldnameToPathMap.hasOwnProperty('individual[profilePic]')) {
            profilePic = fieldnameToPathMap[key];
         }

         if (fieldnameToPathMap.hasOwnProperty('business[businessLogo]')) {
            businessLogo = fieldnameToPathMap[key];
         }

         if (fieldnameToPathMap.hasOwnProperty('business[paymentGatewayLogo]')) {
            paymentGatewayLogo = fieldnameToPathMap[key];
         }

         if (fieldnameToPathMap.hasOwnProperty('business[mediaImg]')) {
            mediaImg = fieldnameToPathMap[key];
         }

         if (fieldnameToPathMap.hasOwnProperty('business[galleryImg]')) {
            galleryImg = fieldnameToPathMap[key].map(item => item.path)
         }

      }

      const updatedData = {
         ...req.body,
         "individual": {
            ...req.body.individual,
            "profilePic": profilePic,
         },
         "business": {
            ...req.body.business,
            "logo": businessLogo,
            "paymentGateway": {
               ...req.body.business.paymentGateway,
               "logo": paymentGatewayLogo,
            },
            "gallery": galleryImg,
            "media": {
               ...req.body.business.media,
               "src": mediaImg,
            },
         }
      }

      let data;

      if (!data) {
         return res.status(404).send('User not found');
      }

      if (files.length) {
         data = await schema.User.findByIdAndUpdate(id, updatedData, { new: true });
      } else {
         data = await schema.User.findByIdAndUpdate(id, req.body, { new: true });
      }

      res.send(data)

   } catch (err) {
      res.status(500).send(err);
   }

});

//DELETE USER
router.delete('/idyUser/:id', async (req, res) => {
   try {
      const id = req.body._id;
      const data = await schema.User.findByIdAndDelete(id, req.body, { new: true });
      if (!data) {
         return res.status(404).send('User not found');
      }
      res.send(data)
   } catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router