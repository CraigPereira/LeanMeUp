//Middleware for authentication
const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    //If token doesn't exist return Unauthorized
    if (!token) return res.status(401).json({ errorMsg: "Unauthorized" });

    //If it does, Verify, any errors will be caught in the catch block
    const secretKey = process.env.JWT_SECRET;
    const verified = jwt.verify(token, secretKey);
    req.userId = verified.id;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ errorMsg: "Unauthorized" });
  }
};

module.exports = { requireAuth };
