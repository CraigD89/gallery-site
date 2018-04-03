const router = require("express").Router();
const artistRoutes = require("./artist");
const userRoutes = require("./user");

router.use("/artists", artistRoutes);
router.use("/user", userRoutes);

module.exports = router;
