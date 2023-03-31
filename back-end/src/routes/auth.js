const authControllers = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareControllers");
const router = require('express').Router();


router.post("/register", authControllers.registerUser)
router.post("/login", authControllers.loginUser)

router.post("/logout" , authControllers.logoutUser)
module.exports = router;