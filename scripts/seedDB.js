const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ELG", {
  useMongoClient: true
});

const artistSeed = [
  {
    name: "",
    location: "",
    website: "",
    bio: "",
    cv: ""
  },
  {
    name: "",
    location: "",
    website: "",
    bio: "",
    cv: ""
  },
  {
    name: "",
    location: "",
    website: "",
    bio: "",
    cv: ""
  }
];

const artworkSeed = [
  {
    artistID: Number,
    title: "",
    year: Number,
    materials: "",
    code: ""
  }
];

const userSeed = [
  {
    email: String,
    password: String,
    favoriteID: Number
  }
]


// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
