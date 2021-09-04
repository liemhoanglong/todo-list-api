const taskService = require('../services/tasks.sevice');

module.exports = {
    getAll: async (req, res) => {
        const tasks = await taskService.getAllTask();
        res.json({ tasks });
    },
    getOne: async (req, res) => {
        req.board = 'boardId';
        const task = await taskService.getTasksByBoardId(req.boardId);
        res.json({ task });
    },
}