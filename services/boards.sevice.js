const Board = require('../model/board.model');

module.exports = {
	getAll: () => {
		return res = Board.find();
	},
	getBoardsByUserId: (authorId) => {
		return res = Board.find({ authorId });
	},
	getOne: (boardId) => {
		return res = Board.findById({ boardId });
	},
	getBoardsByTitle: (title) => {
		return res = Board.find({ title });
	},
	create: async (title, authorId) => {
		const newBoard = new Board({
			title,
			authorId
		});
		return await newBoard.save();
	},
	update: async (boardId, title) => {
		let boardUpdated = await Board.findById(boardId);
		boardUpdated.title = title;
		return await boardUpdated.save();
	},
	changeIsDone: async (boardId) => {
		let boardUpdated = await Board.findById(boardId);
		boardUpdated.isDone = !boardUpdated.isDone;
		return await boardUpdated.save();
	},
	delete: async (boardId) => {// delete boards will delete all task relative
		return await Board.deleteOne({ _id: boardId });
	},
}
