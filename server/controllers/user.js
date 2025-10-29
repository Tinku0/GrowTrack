const User = require("../models/user")

const signUpUser = async (req, res) => {
    const { username, password } = req.body;
    const isUserExists = await User.findOne({username: username});
    if(isUserExists){
        return res.status(500).json({ message: 'Username exists already' })
    }
    try {
        const user = new User({ username: username, password: password  });
        await user.save();
        res.status(201).json({ message: 'User created succesfully', user: user });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}

const signInUser = async (req, res) => {
    const { username, password } = req.body;
    const isUserExists = await User.findOne({username: username});
    if(!isUserExists){
        return res.status(500).json({ message: 'User does not exist' })
    }
    try {
        const user = await User.findOne({ username: username })
        if(user.password === password){
            res.status(200).json({ message: 'Sign in succesfull', user: user });
        }else{
            res.status(500).json({ message: 'Incorrect credentials' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}

module.exports = { signUpUser, signInUser };