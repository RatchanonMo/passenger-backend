const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LiftSchema = new Schema(
  {
    time: {
      type: String,
    },
    a1: {
      type: String,
    },
    a2: {
      type: String,
    },
  },
  {
    collection: "lift",
  }
);

module.exports = mongoose.model("Lift", LiftSchema);
