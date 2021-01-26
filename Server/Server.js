//Imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Initialize Express app
const app = express();

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
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Successfully Connected to MongoDB");
    Listen();
  })
  .catch((err) => console.error(err));

app.use((req, res, next) => {
  const { method, path, hostname } = req;
  console.log(`New ${method} Request made to path ${path} on ${hostname}`);
  next();
});

app.get("/", (req, res) => res.send(`Hello there`));
