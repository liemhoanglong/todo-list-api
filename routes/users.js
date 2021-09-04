const express = require('express');

const userController = require('../controllers/users.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', userController.getAll);

router.get('/profile', userController.getOne);

module.exports = router;
