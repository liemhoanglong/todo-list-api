const express = require('express');

const boardController = require('../controllers/boards.controller');

const router = express.Router();

/* GET boards listing. */
router.get('/', boardController.getAll);

router.get('/detail', boardController.getOne);

module.exports = router;
