const express = require("express");

const router = express.Router();

// Test Route
router.get("/", (req, res) => {
    res.send("User Route Working");
});

module.exports = router;