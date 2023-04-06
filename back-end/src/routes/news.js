const router = require("express").Router();
const newsControllers = require("../controllers/newsController");
const middlewareController = require("../controllers/middlewareControllers");

// get all news
router.get("/" ,newsControllers.getAllNews);

// get all news
router.post("/createNews" ,newsControllers.createNews);

module.exports = router;