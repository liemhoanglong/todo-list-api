const Board = require('../model/board.model');
const escapeRegex = require('../utils/escapseRegex')

module.exports= {
	getAllBoards: async() => {
		let res = await Board.find();
		return res
	},

	getBoardsByUserId: async(userId) => {
		let res = await Board.find({authorId: userId});
		return res
	},

}

