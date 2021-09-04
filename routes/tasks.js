const express = require('express');

const taskController = require('../controllers/tasks.controller');

const router = express.Router();

/* GET tasks listing. */
router.get('/', taskController.getAll);

router.get('/detail', taskController.getOne);

module.exports = router;
