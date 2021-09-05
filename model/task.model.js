const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "board"
    },
    isDone: {
        type: Boolean,
        default: false
    },
    imageList: {
        type: Array
    },
});

module.exports = mongoose.model('task', taskSchema, 'task');