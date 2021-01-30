const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//User Schema & Model

const schema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
};

const userSchema = new mongoose.Schema(schema);

//Fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  //Hashing Passwords using bcrypt
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
