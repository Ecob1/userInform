const express = require("express");
const router = express.Router();
router.use("/", require("./swagger"));
router.use("/userInf", require("./userInfo"));
module.exports = router;
