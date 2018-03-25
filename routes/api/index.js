const router = require("express").Router();
const artistRoutes = require("./artist");
const artworkRoutes = require("./artwork");
const userRoutes = require("./user");

// Book routes
router.use("/artist", artistRoutes);
router.use("/artwork", artworkRoutes);
router.use("/user", userRoutes);

module.exports = router;
