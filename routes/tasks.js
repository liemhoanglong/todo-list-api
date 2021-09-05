const express = require('express');

const taskController = require('../controllers/tasks.controller');

const router = express.Router();

/* GET tasks listing. */
router.get('/', taskController.getAll);  //need mdw adminathu
router.get('/list-task/:board', taskController.getTasksByBoardId); //need mdw adminathu
router.get('/my-list-task/:board', taskController.getTasksByMyBoardId);
router.get('/:id', taskController.getOne);
router.post('/:board', taskController.create);
router.get('/change/:id', taskController.changeIsDone);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

module.exports = router;
