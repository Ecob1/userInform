const express = require("express");
const router = express.Router();
router.use("/", require("./swagger"));
router.use("/usersInf", require("./userInfo"));
module.exports = router;
