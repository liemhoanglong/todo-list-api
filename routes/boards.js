const express = require('express');

const boardService = require('../services/boards.sevice');

const router = express.Router();

/* GET boards listing. */
router.get('/', function (req, res, next) {
  res.json({ boards: boardService.getAllBoards() });
});

module.exports = router;
