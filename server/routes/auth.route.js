const express = require("express");
const router = express.Router();

const { register } = require("../controllers/auth.controller");
const { validateRegisterInput } = require("../middleware/auth.middleware");

router.post("/register", validateRegisterInput, register);

module.exports = router;