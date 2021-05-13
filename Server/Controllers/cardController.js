const Card = require("../Models/Cards");

const cards_get = async (req, res) => {
  const cards = await Card.find({});
  res.json({ cards });
};

module.exports = { cards_get };
