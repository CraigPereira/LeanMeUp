const User = require("../Models/User");

const email_post = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);
    res.send(user.email);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "error" });
  }
};

module.exports = { email_post };
