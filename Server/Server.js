//Imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/authRoutes");
const quoteRoutes = require("./Routes/quoteRoutes");

//Initialize Express app
const app = express();

//Parse any json data from request it into a js object
app.use(express.json());

//Enables a cookie method on the response object, making it easier to use cookies
app.use(cookieParser());

//Cors to prevent CORS errors
app.use(cors({ credentials: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const Listen = () => {
  //Listen for Requests.
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

//Connect to MongoDB
const dbURI = process.env.dbURI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect(dbURI, options)
  .then((result) => {
    console.log("Successfully Connected to MongoDB Atlas");
    Listen();
  })
  .catch((err) => console.error(err));

//Routes
app.get("/", (req, res) => res.send(`Hello there`));
app.use("/api", authRoutes);
app.use("/api/quote", quoteRoutes);
