const express = require('express');

const boardController = require('../controllers/boards.controller');

const router = express.Router();

/* GET boards listing. */
router.get('/', boardController.getAll); //need mdw adminathu
router.get('/search', boardController.search);
router.get('/list-board/:userId', boardController.getBoardsByUserId); //need mdw adminathu
router.get('/my-list-board', boardController.getMyListBoard);
router.get('/:id', boardController.getOne); //need mdw adminathu
router.get('/my-board/:id', boardController.getMyBoard);
router.post('/', boardController.create);
router.get('/change/:id', boardController.changeIsDone);
router.put('/:id', boardController.update);
router.delete('/:id', boardController.delete);

module.exports = router;
