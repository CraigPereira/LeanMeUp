const mongoose = require("mongoose");

//Quotes Schema

const schema = {
  quote: {
    type: String,
  },
  author: {
    type: String,
  },
};

const quoteSchema = new mongoose.Schema(schema);

const Quotes = mongoose.model("quote", quoteSchema);

module.exports = Quotes;
