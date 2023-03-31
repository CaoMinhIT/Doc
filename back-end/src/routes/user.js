const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const middlewareController = require("../controllers/middlewareControllers");

// get all users
router.get("/" ,middlewareController.verifyToken ,userControllers.getAllUsers);
// delete user
router.delete("/:id",userControllers.deleteUser);
module.exports = router;