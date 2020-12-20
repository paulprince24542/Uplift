const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  profilepic: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  accountVerified: {
    type: Boolean,
    default: false,
  },
  accountToken: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
