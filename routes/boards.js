const express = require('express');

const boardController = require('../controllers/boards.controller');

const router = express.Router();

/* GET boards listing. */
router.get('/', boardController.getAll);
router.get('/search', boardController.search);
router.get('/detail', boardController.getOne);
router.post('/', boardController.create);
router.get('/:id', boardController.changeIsDone);
router.put('/:id', boardController.update);
router.delete('/:id', boardController.delete);

module.exports = router;
