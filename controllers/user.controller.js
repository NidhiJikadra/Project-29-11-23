const UserModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const home = (req,res)=>{
    res.render("home")
}

const loginshow = (req,res)=>{
    res.render("login")
}

const signupshow = (req,res)=>{
    res.render("signup")
}

const signup = async(req,res)=>{
    const {username,email,password,role} = req.body
    let data = await UserModel.findOne({email:email})
    if(data){
        res.render("home")
    }
    else{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.send({message : "error.."})
            }
            else{
                let user = {
                    username,
                    email,
                    password : hash,
                    role
                }
                let data = await UserModel.create(user)
                const token = jwt.sign({id:data.id,role:data.role},"token")
                res.cookie("token",token).render("profile")
            }
        })
    }
}

const login = async(req,res)=>{
    const {email,password} = req.body
    let data = await UserModel.findOne({email:email})
    if(data){
        bcrypt.compare(password,data.password,(err,result)=>{
            if(result){
                const token = jwt.sign({id:data.id,role:data.role},"token")
                res.cookie("token",token).render("profile")
            }
            else{
                res.send({message:"Incorrect Password.."})
            }
        })
    }
    else{
        res.render("signup")
    }
}

module.exports = {home,loginshow,signupshow,signup,login}