const boardService = require('../services/boards.sevice');
const taskService = require('../services/tasks.sevice');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
    getAll: async (req, res) => {
        const boards = await boardService.getAll();
        res.json({ boards });
    },
    getBoardsByUserId: async (req, res) => {
        const boards = await boardService.getBoardsByUserId(req.params.userId);
        res.json({ boards });
    },
    getMyListBoard: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const boards = await boardService.getBoardsByUserId(req.userId);
        res.json({ boards });
    },
    getOne: async (req, res) => {
        const board = await boardService.getBoard(req.params.id);
        res.json({ board });
    },
    getMyBoard: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const board = await boardService.getBoardByUserId(req.params.id, req.userId);
        res.json({ board });
    },
    search: async (req, res) => {
        const board = await boardService.getBoardsByTitle(new RegExp(escapeRegex(req.query.q), 'gi'));
        res.json({ board });
    },
    create: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const board = await boardService.create(req.body.title, req.userId);
        res.json({ board });
    },
    update: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const board = await boardService.update(req.params.id, req.body.title, req.userId);
        res.json({ board });
    },
    changeIsDone: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const board = await boardService.changeIsDone(req.params.id, req.userId);
        res.json({ board });
    },
    delete: async (req, res) => { //delete boards will delete all tasks relative
        req.userId = '61337e77bb4f3658bc1f2b57';
        try {
            const resultDelBoard = await boardService.delete(req.params.id, req.userId);
            if (resultDelBoard) {
                const resultDelTask = await taskService.deleteByBoardId(req.params.id);
                if (resultDelTask.n > 0)
                    res.json({ msg: `Delete board success, Delete ${resultDelTask.n} tasks success` });
                else
                    res.json({ msg: `Delete board success, No task delete` });
            }
            else
                res.json({ msg: 'No board matched!' });
        }
        catch (err) {
            console.log(err)
            res.json({ err: 'Can not delete board!' });
        }
    },
}