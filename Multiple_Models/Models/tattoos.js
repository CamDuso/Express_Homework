const mongoose = require("mongoose");

const tattoosSchema = new mongoose.Schema({
  Description: { type: String, required: true }
});

const Tattoo = mongoose.model("Tattoo", tattoosSchema);

module.exports = Tattoo;