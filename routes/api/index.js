const router = require("express").Router();
const artistRoutes = require("./artist");
// const artistDetailRoutes = require("./artistdetail");
// const artworkRoutes = require("./artwork");
const userRoutes = require("./user");

// Book routes
router.use("/artists", artistRoutes);
// router.use("/artist/:id", artistRoutes);
// router.use("/artwork", artworkRoutes);
router.use("/user", userRoutes);

module.exports = router;
