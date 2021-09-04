const Task = require('../model/task.model');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
	getAllTask: () => {
		let res = Task.find();
		return res
	},

	getTasksByBoardId: (boardId) => {
		let res = Task.find({ boardId: boardId });
		return res
	},

}

