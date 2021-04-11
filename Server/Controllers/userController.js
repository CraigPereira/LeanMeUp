const UserStats = require("../Models/UserStats");

const stats_post = async (req, res) => {
  const { stats } = req.body;
  console.log(stats);
  try {
    const userStats = await UserStats.create({ ...stats });
    res.status(201).send("Success: Document Created");
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Error creating user stats document" });
  }
};

const stats_get = async (req, res) => {
  const { userId } = req;
  try {
    const stats = await UserStats.findOne({ user: userId });
    res.status(200).json({ stats });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Error fetching user data" });
  }
};

module.exports = { stats_post, stats_get };
