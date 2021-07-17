const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  studentName: {
    type: String,
  },
  userName: {
    type: String,
  },
  date: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
