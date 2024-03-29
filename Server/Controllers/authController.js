//Auth Controller functions
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "Incorrect Email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "Incorrect Password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }
  return errors;
};

//Creating JWT
const createToken = (id) => {
  const secretKey = process.env.JWT_SECRET;
  return jwt.sign({ id }, secretKey, { expiresIn: "7d" });
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
    res.status(201).json({ status: "Sign up Successful" });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  //Try to Log a user in
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    const time = process.env.JWT_EXPIRES_IN * 1000;
    //Sending back the token in a cookie
    res.cookie("jwt", token, { httpOnly: true, maxAge: time });
    res.status(200).json({ status: "Login Successful" });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

//Log out a user by resetting the jwt token
const logout_get = (req, res) => res.cookie("jwt", "", { maxAge: 1 }).send();

const checkAuth_get = async (req, res) => {
  //Route to check if the current user is authenticated or not
  try {
    const token = req.cookies.jwt;
    if (!token) return res.json(false);

    const secretKey = process.env.JWT_SECRET;
    const verified = jwt.verify(token, secretKey);
    //Fetching User Data if Verification is successful
    const user = await User.findById(verified.id);

    const { email } = user;
    res.json({ status: true, email });
  } catch (err) {
    console.log(err);
    res.json({ status: false });
  }
};

module.exports = { signup_post, login_post, checkAuth_get, logout_get };
