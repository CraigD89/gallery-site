const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  location: String,
  website: String,
  bio: String,
  cv: String
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
