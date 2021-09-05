const userService = require('../services/users.sevice');

module.exports = {
    getAll: async (req, res) => {
        const users = await userService.getAll();
        res.json({ users });
    },
    getProfile: async (req, res) => {
        req.userId = '61337e77bb4f3658bc1f2b57';
        const user = await userService.getOne(req.userId);
        res.json({ user });
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const currentUser = await userService.getUserByUsername(username);
        if (currentUser) {//check username is exist
            try {
                const isMatch = bcrypt.compareSync(password, currentUser.password);
                if (isMatch) {
                    const user = { id: currentUser._id };
                    const accessToken = await jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
                    res.json({ accessToken: accessToken });
                }
                else {
                    res.json({ error: "Wrong username or password" });
                }
            } catch (err) {
                console.log(err);
                res.json({ error: "Cannot login now. Try later!" })
            }
        }
        else {
            res.json({ error: "Wrong username or password" });
        }
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
            try {
                const user = await userService.create(username, fullname, password);
                res.json({ user })
            } catch (err) {
                console.log(err);
                res.json({ err: "Can not create new user!" })
            }
        }
        else {
            res.json({ error: "This username already exists!" });
        }
    },
    update: async (req, res) => {
        try {
            const user = await userService.update(req.body);
            if (user === 0)
                res.json({ msg: "This username dose not exists!" })
            else if (user === -1)
                res.json({ msg: "Wrong password" })
            else
                res.json({ user })
        } catch (err) {
            console.log(err);
            res.json({ err: "Can not update user!" })
        }
    },
}