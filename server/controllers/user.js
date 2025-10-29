const User = require("../models/user")

const createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username: username, password: password  });
        await user.save();
        res.status(201).json({ message: 'User created succesfully', user: user });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { createUser };