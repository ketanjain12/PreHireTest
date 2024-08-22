// middleware/auth.js add new file today aug17
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            // Decode token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = decoded.id;

            next();
        } catch (error) {
            console.error("Authentication Error:", error);
            res.status(401).json({
                status: false,
                msg: "Not authorized, token failed"
            });
        }
    }

    if (!token) {
        res.status(401).json({
            status: false,
            msg: "Not authorized, no token"
        });
    }
};

module.exports = protect;
