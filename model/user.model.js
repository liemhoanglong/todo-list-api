const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        default: ""
    },
    isLocalLogin: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBlock: {
        type: Boolean,
        default: true
    },
    registerDate: {
        type: Date,
        default: Date.now()
    },
    avatar: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model('user', usersSchema, 'user');