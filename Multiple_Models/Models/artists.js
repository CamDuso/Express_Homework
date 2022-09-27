const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema({
  Name: { type: String, required: true }
});

const Artist = mongoose.model("Artist", artistsSchema);

module.exports = Artist;