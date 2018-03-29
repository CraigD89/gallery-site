const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user:password@ds161901.mlab.com:61901/heroku_snm4kn2g",
  {
    useMongoClient: true
  }
);

const artistSeed = [
  {
    name: "Amalie Jakobsen",
    location: "Berlin",
    website: "http://www.amaliejakobsen.com/",
    bio: "Lives and works in Berlin, Germany",
    cv: ""
  },
  {
    name: "Lisa Kirk",
    location: "Woodstock",
    website: "https://www.lisakirkprojects.com/",
    bio: "Lives and works in New York, NY",
    cv: ""
  },
  {
    name: "Melissa Leandro",
    location: "Chicago",
    website: "http://melissaleandro.com/home.html",
    bio: "Lives and works in Chicago, IL",
    cv: ""
  }
];

const artworkSeed = [
  {
    artistID: Number,
    title: "Untitled",
    year: 2017,
    dimensions: "24 x 20 x 20 in",
    materials: "Steel, aluminum, aerosol primer, acrylic paint",
    code: "AJ004",
    imageURL: "https://i.imgur.com/BzIVFfK.jpg"
  },
  {
    artistID: Number,
    title: "Untitled",
    year: 2016,
    dimensions: "76 x 26 x 20 in",
    materials: "Aluminum, aerosol primer, acrylic paint",
    code: "AJ001",
    imageURL: "https://i.imgur.com/LfQMII2.jpg"
  },
  {
    artistID: Number,
    title: "Untitled",
    year: 2016,
    dimensions: "56 x 10 x 11 in",
    materials: "Aluminum, aerosol lacquer",
    code: "AJ011",
    imageURL: "https://i.imgur.com/rjKwDdo.jpg"
  },


  {
    artistID: Number,
    title: "Shaman Sticks",
    year: 2016,
    dimensions: "Dimensions variable",
    materials: "Dyed python and lizard skin on wood",
    code: "LK006",
    imageURL: "https://i.imgur.com/yeATvN8.jpg"
  },
  {
    artistID: Number,
    title: "All Things are Difficult Before They Are Easy",
    year: 2016,
    dimensions: "46 x 69 in",
    materials: "Cyanotype on canvas washed in Ayahuasca tea",
    code: "LK002",
    imageURL: "https://i.imgur.com/Vhcs2Qg.jpg"
  },
  {
    artistID: Number,
    title: "S'more",
    year: 2016,
    dimensions: "72 x 72 in",
    materials: "Steel, bronze, hemp, python skin",
    code: "LK009",
    imageURL: "https://i.imgur.com/m1VQ6yz.jpg"
  },


  {
    artistID: Number,
    title: "Mis Flores",
    year: 2017,
    dimensions: "88 x 35 in",
    materials: "Jacquard woven cloth,stitching, embroidery, dye",
    code: "ML020",
    imageURL: "https://i.imgur.com/oLBgYdk.jpg"
  },
  {
    artistID: Number,
    title: "Neon grove",
    year: 2017,
    dimensions: "64 x 35 in",
    materials: "Jacquard woven cloth, dye",
    code: "ML018",
    imageURL: "https://i.imgur.com/BgzrpSB.jpg"
  },
  {
    artistID: Number,
    title: "Hojas Mojadas",
    year: 2017,
    dimensions: "89 x 36 in",
    materials: "Jacquard woven cloth, dye, wool",
    code: "ML017",
    imageURL: "https://i.imgur.com/IXpuuQk.jpg"
  },

];

const userSeed = [
  {
    email: "demo@art.com",
    password: "password",
    favoriteID: Number
  }
];

db.Artist
  .remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Artwork
  .remove({})
  .then(() => db.Artwork.collection.insertMany(artworkSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
