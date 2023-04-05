const router = require("express").Router();
const newsControllers = require("../controllers/newsController");
const middlewareController = require("../controllers/middlewareControllers");

// get all news
router.get("/" ,newsControllers.getAllNews);

module.exports = router;