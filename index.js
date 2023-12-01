const express = require("express");
const connect = require("./config/db");
const cookie = require("cookie-parser");
const UserRoute = require("./routes/user.route");
const ProductRoute = require("./routes/product.route");
require('dotenv').config();
const app = express()
app.use(express.json())
app.set("view engine","ejs")
app.set("views",__dirname + "/views")
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
app.use(cookie())
app.use("/user",UserRoute)
app.use("/product",ProductRoute)

app.listen(process.env.PORT,()=>{
    console.log("Server is listening...");
    connect()
})