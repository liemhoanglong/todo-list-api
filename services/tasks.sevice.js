const Task = require('../model/task.model');

module.exports = {
	getAll: () => {
		let res = Task.find();
		return res
	},
	getTasksByBoardId: (boardId) => {
		let res = Task.find({ boardId });
		return res
	},
	getTasksByMyBoardId: (boardId, userId) => {
		let res = Task.find({ boardId }).populate({ path: "boardId" });
		if (taskdUpdated.boardId.authorId == userId)
			return res;
		return;
	},
	getTask: (taskId) => {
		return res = Task.findById(taskId);
	},
	create: async (title, boardId) => {
		const newTask = new Task({
			title,
			boardId
		});
		return await newTask.save();
	},
	update: async (taskId, title, userId) => { //need to check author before update
		let taskdUpdated = await Task.findById(taskId).populate({ path: "boardId" });
		if (taskdUpdated.boardId.authorId == userId) {
			taskdUpdated.title = title;
			return await taskdUpdated.save();
		}
		return;
	},
	changeIsDone: async (taskId, userId) => { //need to check author before change
		let taskUpdated = await Task.findById(taskId).populate({ path: "boardId" });
		if (taskUpdated.boardId.authorId == userId) {
			taskUpdated.isDone = !taskUpdated.isDone;
			return await taskUpdated.save();
		}
		return;
	},
	delete: async (taskId, userId) => { //need to check author before delete
		let task = await Task.findById(taskId).populate({ path: "boardId" });
		if (task.boardId.authorId == userId)
			return await task.deleteOne({ userId: task.boardId.authorId });
		return;
	},
	deleteByBoardId: async (boardId) => {
		return await Task.deleteMany({ boardId });
	},
}

