const express = require("express")
const { home, loginshow, signupshow, signup, login } = require("../controllers/user.controller")
const UserRoute = express.Router()

UserRoute.get("/",home)
UserRoute.get("/login",loginshow)
UserRoute.get("/signup",signupshow)
UserRoute.post("/signup",signup)
UserRoute.post("/login",login)

module.exports = UserRoute