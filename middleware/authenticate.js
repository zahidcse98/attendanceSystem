const jwt = require('jsonwebtoken');
const User = require('../models/User');


async function authenticate(req, res, next) {
    try{
        let token = req.headers.authorization;
        
        if(!token) {
            return res.status(401).json({ message: 'Unauthorized'});
        }

        token = token.split(' ')[1];
        //console.log(token);
        const decode = jwt.verify(token, 'secret-key');
        //console.log(decode);
        const user = await User.findById(decode._id);
        //console.log(user);
        if(!user){
            return res.status(401).json({ message: 'Unauthorized'});
        }

        req.user = user;
        next();
    } catch (error) {
    return res.status(400).json({message: 'Invalid token'});
    }
}

module.exports = authenticate;