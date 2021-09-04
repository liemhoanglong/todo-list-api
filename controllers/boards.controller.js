const boardService = require('../services/boards.sevice');

module.exports = {
    getAll: async (req, res) => {
        const boards = await boardService.getAllBoards();
        res.json({ boards });
    },
    getOne: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const board = await boardService.getBoardsByUserId(req.userId);
        res.json({ board });
    },
}