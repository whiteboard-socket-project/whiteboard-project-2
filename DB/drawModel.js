const mongoose = require("mongoose");

const drawSchema = mongoose.Schema({
  name: {
    draw: String,
  },
});

const drawModel = mongoose.model("draw", drawSchema);

module.exports = drawModel;
