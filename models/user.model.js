const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role:String
})

const UserModel = new mongoose.model("Users",UserSchema)

module.exports = UserModel