const { type, required } = require("express/lib/response");
const mongoose = require("mongoose");

// const server = mongoose.Schema({
//   ipAddress: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   name: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   type: { type: mongoose.Types.ObjectId, ref: "Types", required: true },
//   isRunning: {
//     type: Boolean,
//     default: false,
//   },
//   startingDate: {
//     type: Date,
//   },
//   endingDate: {
//     type: Date,
//   },
//   sumToPay: { type: String, default: 0 },
//   deleted: { type: Boolean, default: false },
// });

const server = mongoose.Schema({
  ipAddress: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  type: { type: mongoose.Types.ObjectId, ref: "Types", required: true },
  isRunning: {
    type: Boolean,
    default: false,
  },
  startingDate: {
    type: Date,
  },
  endingDate: {
    type: Date,
  },
  sumToPay: { type: String, default: 0 },
  deleted: { type: Boolean, default: false },
});

const Server = mongoose.model("servers", server);
module.exports = Server;
