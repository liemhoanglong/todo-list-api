const express = require('express');

const userService = require('../services/users.sevice');

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ users: userService.getAllUsers() });
});

module.exports = router;
