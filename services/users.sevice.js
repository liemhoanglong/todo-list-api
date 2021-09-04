const User = require('../model/user.model');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
	getAllUsers: () => {
		let res = User.find();
		return res
	},

	getUserById: (id) => {
		let res = User.findById(id);
		return res
	},

}

