const router = require("express").Router();
const newsControllers = require("../controllers/newsController");
const middlewareController = require("../controllers/middlewareControllers");

// get all news
router.get("/" ,newsControllers.getAllNews);
// get create news
router.post("/createNews" ,newsControllers.createNews);

// get delete news
router.post("/:id",middlewareController.verifyToken ,newsControllers.deleteNews);

module.exports = router;