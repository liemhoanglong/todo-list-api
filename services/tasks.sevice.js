const Task = require('../model/task.model');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
	getAllTask: async() => {
		let res = await Task.find();
		return res
	},

	getAllTasksByBoardId: async(boardId) => {
		let res = await Task.find({boardId: boardId});
		return res
	},

}

