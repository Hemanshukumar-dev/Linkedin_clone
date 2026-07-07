const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth.controller");
const { validateRegisterInput, validateLoginInput } = require("../middleware/auth.middleware");

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);

module.exports = router;