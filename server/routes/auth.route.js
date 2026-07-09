const express = require("express");
const router = express.Router();

const { register, login, getMe } = require("../controllers/auth.controller");
const { validateRegisterInput, validateLoginInput, protect } = require("../middleware/auth.middleware");

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/me", protect, getMe);

module.exports = router;