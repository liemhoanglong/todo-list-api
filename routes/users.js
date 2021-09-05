const express = require('express');

const userController = require('../controllers/users.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', userController.getAll);// need adminauth
router.get('/profile', userController.getProfile);
router.post('/register', userController.register);
router.put('/edit-profile', userController.update);
// router.get('/login', userController.register);

module.exports = router;
