const express = require('express');
const { Router } = require('express');
const router = express.Router();

const {Login} = require('../controllers/homeController');

router.get('/login', Login);

module.exports = router;