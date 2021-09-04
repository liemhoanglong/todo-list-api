const User = require('../model/user.model');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
	getAllUsers: async() => {
		let res = await User.find();
		return res
	},

	getUserById: async(id) => {
		let res = await User.findById(id);
		return res
	},

}

