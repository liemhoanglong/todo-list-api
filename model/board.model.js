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
    status: {
        type: Boolean,
        default: true
    },
    isShare: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('board', boardSchema, 'board');