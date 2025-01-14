const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain.model');
const blackListTokenModel = require('../models/blackListToken.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    const isBlackListToken = await blackListTokenModel.findOne({ token    });
    if (isBlackListToken) {
        return res.status(401).json({ message: 'Unauthorized User' });
    }

    if (!token) {
        return res.status(401).json({ message: ' Unauthorized User' });
    }


    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: 'Unauthorized User' });
        }

        req.user = user;
        return next();


        }catch(err){
            return res.status(401).json({ message: 'Invalid Token' });
        }
}


module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    const isBlackListToken = await blackListTokenModel.findOne({ token    });
    if (isBlackListToken) {
        return res.status(401).json({ message: 'Unauthorized captain' });
    }
    if (!token) {
        return res.status(401).json({ message: ' Unauthorized captain' });
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);  
        if (!captain) {
            return res.status(404).json({ message: 'Unauthorized captain' });
        }
        req.captain = captain;
        return next();
    }
    catch(err){
        return res.status(401).json({ message: 'Invalid Token' });
    }
}