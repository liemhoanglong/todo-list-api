const Board = require('../model/board.model');

module.exports = {
	getAll: () => {
		return res = Board.find();
	},
	getBoardsByUserId: (authorId) => {
		return res = Board.find({ authorId });
	},
	getBoard: (boardId) => {
		return res = Board.findById(boardId);
	},
	getBoardByUserId: (boardId, userId) => {
		const board = Board.findById(boardId);
		if (board.authorId == userId)
			return res = board
		return;
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
	update: async (boardId, title, userId) => {
		let boardUpdated = await Board.findById(boardId);
		if (boardUpdated.authorId == userId) {
			boardUpdated.title = title;
			return await boardUpdated.save();
		}
		return;
	},
	changeIsDone: async (boardId, userId) => {
		let boardUpdated = await Board.findById(boardId);
		if (boardUpdated.authorId == userId) {
			boardUpdated.isDone = !boardUpdated.isDone;
			return await boardUpdated.save();
		}
		return;
	},
	delete: async (boardId, userId) => { //Need to check author before delete 
		let board = await Board.findById(boardId);
		if (board.authorId == userId)
			return await board.deleteOne({ _id: boardId });
		return;
	},
}
