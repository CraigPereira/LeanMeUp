const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Cards Data Schema

const cardsSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  icon: String,

  info: Array,
});

const Card = mongoose.model("card", cardsSchema);

module.exports = Card;
