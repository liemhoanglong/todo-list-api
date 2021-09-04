const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    isDone: {
        type: Boolean,
        default: false
    },
    isShare: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('board', boardSchema, 'board');