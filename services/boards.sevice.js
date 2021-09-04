const Board = require('../model/board.model');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
	getAllBoards: () => {
		return res = Board.find();
	},
	getBoardsByUserId: (userId) => {
		return res = Board.find({ authorId: userId });

	},
	addBoard: (data) => {

	},
	editBoard: (data) => {

	},
	deleteBoard: (data) => {

	},
}

