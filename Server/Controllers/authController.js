//Auth Controller functions
const User = require("../Models/User");

const signup_post = async (req, res) => {
  const { email, password, name } = req.body;

  //Try to create a new user
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error, user not created :(");
  }
};

const login_post = async (req, res) => {
  res.send("New Login");
};

module.exports = { signup_post, login_post };
