const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const validateRegisterInput = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (typeof password !== "string" || password.length < 6) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 6 characters long"
        });
    }

    next();
};

const validateLoginInput = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    next();
};

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            req.user = await User.findById(decoded.id).select("-password");
            return next();
        } catch (error) {
            return res.status(401).json({ success: false, message: "Not authorized, token failed" });
        }
    }

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, no token" });
    }
};

module.exports = {
    validateRegisterInput,
    validateLoginInput,
    protect
};