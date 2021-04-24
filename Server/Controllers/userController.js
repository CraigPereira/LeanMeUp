const UserStats = require("../Models/UserStats");

const adv_stats_post = async (req, res) => {
  const { stats } = req.body;
  const { userId } = req;

  stats.user = userId;

  try {
    const prevData = await UserStats.findOne({ user: userId });
    if (prevData) {
      const { bmi, user, ...advStats } = stats;
      const updated = await UserStats.updateOne({ user: userId }, advStats);
      return res
        .status(200)
        .json({ doc: updated, status: "Update Successful" });
    }

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

module.exports = { adv_stats_post, stats_get };
