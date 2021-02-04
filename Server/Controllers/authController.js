//Auth Controller functions
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

//Creating JWT
const createToken = (id) => {
  const secretKey = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;
  return jwt.sign({ id }, secretKey, { expiresIn });
};

const signup_post = async (req, res) => {
  const { email, password, name } = req.body;

  //Try to create a new user
  try {
    const user = await User.create({ name, email, password });
    //Creating JSON Web token if user successfully created.
    const token = createToken(user._id);
    const time = process.env.JWT_EXPIRES_IN * 1000;
    //Sending back the token in a cookie
    res.cookie("jwt", token, { httpOnly: true, maxAge: time });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error, user not created :(");
  }
};

const login_post = async (req, res) => {
  res.send("New Login");
};

module.exports = { signup_post, login_post };
