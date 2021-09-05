const express = require('express');
const passport = require('passport');

const middlewares = require('../middlewares/auth.middleware');
const userController = require('../controllers/users.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }), middlewares.adminAuth, userController.getAll); // need adminauth
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getProfile); //need login
router.post('/register', userController.register);
router.put('/edit-profile', userController.update); //need login
router.post('/login', userController.login);

module.exports = router;
