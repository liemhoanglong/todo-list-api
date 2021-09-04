const boardService = require('../services/boards.sevice');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
    getAll: async (req, res) => {
        const boards = await boardService.getAll();
        res.json({ boards });
    },
    getOne: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const board = await boardService.getBoardsByUserId(req.userId);
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
        const board = await boardService.update(req.params.id, req.body.title);
        res.json({ board });
    },
    changeIsDone: async (req, res) => {
        const board = await boardService.changeIsDone(req.params.id);
        res.json({ board });
    },
    delete: async (req, res) => {
        try {
            const result = await boardService.delete(req.params.id);
            console.log(result)
            if (result.n === 1)
                res.json({ msg: 'Delete board success' });
            else
                res.json({ msg: 'No board matched' });
        }
        catch (err) {
            console.log(err)
            res.json({ err: 'can not delete board' });
        }
    },
}