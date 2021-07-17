const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  studentName: {
    type: String,
  },

  created_at: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
