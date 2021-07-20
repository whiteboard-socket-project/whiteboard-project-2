const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  studentName: { type: String },
  studntEmail: { type: String },
  date: { type: String },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
