const router = require("express").Router();
const newControllers = require("../controllers/newController");
const middlewareController = require("../controllers/middlewareControllers");

// get all news
router.get("/" ,newControllers.getAllNews);

module.exports = router;