const jwt = require('jsonwebtoken');
require('dotenv/config')

module.exports = function (req, res, next) {
   const token = req.header("Auth-Token");
   if (!token) {
      return res.status(401).send("Access Denied");
   }
   try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      console.log(verified)
      next();
   } catch (err) {
      res.status(400).send("Invalid Token");
   }
}