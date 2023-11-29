const express = require("express")
const { home, loginshow, signupshow, signup, login } = require("../controllers/user.controller")
const router = express.Router()

router.get("/",home)
router.get("/login",loginshow)
router.get("/signup",signupshow)
router.post("/signup",signup)
router.post("/login",login)

module.exports = router