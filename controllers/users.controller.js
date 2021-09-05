const passport = require('passport');
var jwt = require('jsonwebtoken');

const userService = require('../services/users.sevice');

module.exports = {
    getAll: async (req, res) => {
        const users = await userService.getAll();
        res.json({ users });
    },
    getProfile: async (req, res) => {
        res.json({
            username: req.user.username,
            fullname: req.user.fullname,
            isAdmin: req.user.isAdmin,
            isBlock: req.user.isBlock,
            isLocalLogin: req.user.isLocalLogin,
            avatar: req.user.avatar,
        });
    },
    login: async (req, res, next) => {
        passport.authenticate('local', { session: false }, (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).json({
                    message: info.message,
                });
            }
            req.login(user, { session: false }, (err) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    });
                }
                // generate a signed json web token with the contents of user object and return it in the response
                const token = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN_KEY);
                return res.json({
                    user,
                    token
                });
            });
        })(req, res);
        // const { username, password } = req.body;
        // const currentUser = await userService.getUserByUsername(username);
        // if (currentUser) {//check username is exist
        //     try {
        //         const isMatch = bcrypt.compareSync(password, currentUser.password);
        //         if (isMatch) {
        //             const user = {
        //                 id: currentUser._id,
        //                 username: currentUser.username,
        //                 fullname: currentUser.fullname,
        //                 isAdmin: currentUser.isAdmin,
        //                 iat: newDate().getTime()
        //             };
        //             const accessToken = await jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
        //             res.json({ accessToken: accessToken });
        //         }
        //         else {
        //             res.json({ error: "Wrong username or password" });
        //         }
        //     } catch (err) {
        //         console.log(err);
        //         res.json({ error: "Cannot login now. Try later!" })
        //     }
        // }
        // else {
        //     res.json({ error: "Wrong username or password" });
        // }
    },
    register: async (req, res) => {
        const { username, fullname, password } = req.body;
        // check params
        if (!username || !password || !fullname) {
            res.json({
                message: 'Please enter all required fields'
            });
        }
        const currentUser = await userService.getUserByUsername(username);
        if (currentUser) {//check username is exist
            return res.json({ error: "This username already exists!" });
        }
        try {
            const user = await userService.create(username, fullname, password);
            res.json({ user })
        } catch (err) {
            console.log(err);
            res.json({ err: "Can not create new user!" });
        }
    },
    update: async (req, res) => {
        try {
            const user = await userService.update(req.body);
            if (user === 0)
                res.json({ msg: "This username does not exists!" });
            else if (user === -1)
                res.json({ msg: "Wrong password" });
            else
                res.json({ user });
        } catch (err) {
            console.log(err);
            res.json({ err: "Can not update user!" });
        }
    },
}