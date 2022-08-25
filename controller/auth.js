const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = async (req, res, next) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "Invalid Data"});
    }

    try{
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists'});
        }
        user = new User({name, email, password});
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        user.password = hash;
        await user.save();
        return res.status(201).json({message: 'User Created Successfully', user});
    } catch (error) {
        next(error);
    }
};


const loginController = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({ message: "Invalid Credential"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Invalid Credential'});
        }

        delete user._doc.password;

        const token = jwt.sign(user._doc, 'secret-key', {expiresIn: '2h'});

        return res.status(200).json({message: "Login Successful", token});
    } catch(error) {
        next(error);
    }
}

module.exports = { registerController, loginController};