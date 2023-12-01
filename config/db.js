const mongoose = require("mongoose")
require('dotenv').config();

const connect = async() =>{
    await mongoose.connect(`${process.env.DB_URL}`)
    console.log("Database Connected.");
}

module.exports = connect