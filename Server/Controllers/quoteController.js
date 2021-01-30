const Quotes = require("../Models/Quotes");

const quote_get = async (req, res) => {
  try {
    //Fetch Random Quote from the db
    const quote = await Quotes.aggregate([{ $sample: { size: 1 } }]);
    res.status(201).json(quote);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error, Quote not fetched");
  }
};

const quote_post = async (req, res) => {
  try {
    const { quote, author } = req.body;
    const newQuote = await Quotes.create({ quote, author });
    res.status(201).json(newQuote);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error, data not Saved");
  }
};

module.exports = { quote_get, quote_post };
