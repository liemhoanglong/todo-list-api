const userService = require('../services/users.sevice');

module.exports = {
    getAll: async (req, res) => {
        const users = await userService.getAll();
        res.json({ users });
    },
    getOne: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const user = await userService.getOne(req.userId);
        res.json({ user });
    },
}