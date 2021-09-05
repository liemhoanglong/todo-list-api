const taskService = require('../services/tasks.sevice');
const boardService = require('../services/boards.sevice');

module.exports = {
    getAll: async (req, res) => {
        const tasks = await taskService.getAll();
        res.json({ tasks });
    },
    getTasksByBoardId: async (req, res) => {
        const tasks = await taskService.getTasksByBoardId(req.params.board);
        res.json({ tasks });
    },
    getTasksByMyBoardId: async (req, res) => {
        req.user = '61337e77bb4f3658bc1f2b57';
        const tasks = await taskService.getTasksByMyBoardId(req.params.board, req.user);
        res.json({ tasks });
    },
    getOne: async (req, res) => {
        const task = await taskService.getTask(req.params.id);
        res.json({ task });
    },
    create: async (req, res) => { // check board is belong to user before create task
        req.user = '61337e77bb4f3658bc1f2b57';
        const board = await boardService.getBoard(req.params.board);
        if (board.authorId == req.user) {
            const task = await taskService.create(req.body.title, req.params.board);
            res.json({ task });
        }
        else
            res.json({ msg: 'This task is not belong to user!' });
    },
    update: async (req, res) => {
        req.user = '61337e77bb4f3658bc1f2b57';
        try {
            const task = await taskService.update(req.params.id, req.body.title, req.user);
            if (task)
                res.json({ task });
            else
                res.json({ msg: 'User is not author!' });
        }
        catch (err) {
            console.log(err)
            res.json({ err: 'Can not update task!' });
        }
    },
    changeIsDone: async (req, res) => {
        req.user = '61337e77bb4f3658bc1f2b57';
        try {
            const task = await taskService.changeIsDone(req.params.id, req.user);
            if (task)
                res.json({ task });
            else
                res.json({ msg: 'User is not author!' });
        }
        catch (err) {
            console.log(err)
            res.json({ err: 'Can not change task!' });
        }
    },
    delete: async (req, res) => {
        req.user = '61337e77bb4f3658bc1f2b57';
        try {
            const resultDelTask = await taskService.delete(req.params.id, req.user);
            if (resultDelTask)
                res.json({ msg: `Delete task success` });
            else
                res.json({ msg: 'No task matched!' });
        }
        catch (err) {
            console.log(err)
            res.json({ err: 'Can not delete task!' });
        }
    },
}