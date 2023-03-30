const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

// get all users
router.get("/",userControllers.getAllUsers);
// delete user
router.delete("/:id",userControllers.deleteUser);
module.exports = router;