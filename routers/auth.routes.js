const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post('/register', authController.signup); // ตรวจสอบว่ามีการกำหนดเส้นทางนี้
router.post("/signin", authController.signin); // ตรวจสอบให้แน่ใจว่ามีเส้นทางนี้

module.exports = router;
