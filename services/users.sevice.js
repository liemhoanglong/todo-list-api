const User = require('../model/user.model');
const escapeRegex = require('../utils/escapseRegex')

module.exports = {
	getAll: () => {
		let res = User.find();
		return res
	},

	getOne: (id) => {
		let res = User.findById(id);
		return res
	},

}

