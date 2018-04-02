const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  location: String,
  website: String,
  bio: String,
  cv: String,
  title: String,
  year: Number,
  materials: String,
  code: String,
  imageURL: String
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
