const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Date: { type: String, required: true },
  Entry: { type: String, required: true },
  shipIsBroken: Boolean,
});

const Log = mongoose.model("Log", logsSchema);

module.exports = Log;
