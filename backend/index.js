const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const bodyParser = require("body-parser");

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

app.use('/', router)

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, dbOptions)
   .then(() => console.log(`SmartIDyDB Connected = ${process.env.DB_URI}`))
   .catch(err => console.log(err))


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
   console.log(`SmartIDyDB Server Is Running on ports = ${port}`)
})











