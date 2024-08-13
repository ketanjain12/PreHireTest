const mongoose = require("mongoose");
require("dotenv").config();
exports.dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('mongodb connected successfully')
    }).catch((error)=>{
        console.error('mongodb connection failed ',error.message)
    })
}