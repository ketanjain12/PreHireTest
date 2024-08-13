const jwt = require('jsonwebtoken');
require("dotenv").config();
exports.generateToken = (userId) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
//    let userId=user@123;
    // Generate JWT token with a secret key and expiry time
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

