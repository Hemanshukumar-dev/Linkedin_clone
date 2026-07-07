const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);   

// Test Route
app.get("/", (req, res) => {
    res.send("LinkedIn Backend API is running...");
});

module.exports = app;