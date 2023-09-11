const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require('multer');
const router = require("./routes/router");
const mongoose = require("mongoose");
require('dotenv/config')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const corsOptions = {
   origin: '*',
   credentials: true,
   optionSuccessStatus: 200,
}
app.use(cors(corsOptions))


// storage engine for multer
const storageEngine = multer.diskStorage({
   destination: './public/uploads/',
   filename: function (req, file, callback) {
      callback(
         null,
         file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
   },
});

// file filter for multer
const fileFilter = (req, file, callback) => {
   let pattern = /jpg|png|svg/; // reqex

   if (pattern.test(path.extname(file.originalname))) {
      callback(null, true);
   } else {
      callback('Error: not a valid file');
   }
};

// initialize multer
const upload = multer({
   storage: storageEngine,
   fileFilter: fileFilter,
});


app.use('/', router)
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, dbOptions)
   .then(() => console.log(`SmartIDyDB Connected = ${process.env.DB_URI}`))
   .catch(err => console.log(err))
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
   console.log(`SmartIDyDB Server Is Running on ports = ${port}`)
})











