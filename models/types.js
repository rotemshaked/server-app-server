const mongoose = require("mongoose");

const types = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  pricePerMinute: Number,
});

const Types = mongoose.model("types", types);
module.exports = Types;
