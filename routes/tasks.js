const express = require('express');

const taskService = require('../services/tasks.sevice');

const router = express.Router();

/* GET tasks listing. */
router.get('/', function (req, res, next) {
  res.json({ tasks: taskService.getAllTask() });
});

module.exports = router;
