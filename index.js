const express = require("express");
const connect = require("./config/db");
require('dotenv').config();
const app = express()

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log("Server is listening...");
    connect()
})