import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import users from "./routes/users.js";
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", users);
// start the Express server
app.listen(PORT, () => {
   console.log(`Server is running on port: ${PORT}`);
});




