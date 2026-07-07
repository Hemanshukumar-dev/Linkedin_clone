const register = async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: "Register Controller Working"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    register
};