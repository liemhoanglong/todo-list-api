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
    status: {
        type: Boolean,
        default: true
    },
    imageList: {
      type: Array,
      required: true,
    },
});

module.exports = mongoose.model('task', taskSchema, 'task');