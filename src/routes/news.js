const newsController = require("../app/controllers/NewsController");
const express = require("express");
const router = express.Router();

router.use("/", newsController.index);

module.exports = router;
