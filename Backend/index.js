const express=require('express');
const app=express();
app.use(express.json());
require("dotenv").config();
const routesdata=require('./routes/rdata');
app.use('/api/v1',routesdata)
require('./config/database').dbconnect();
const port=process.env.Port || 3002;
app.listen(port,()=>{
    console.log(`app is running on port no ${port}`)
})
app.get('/heloo',()=>{
    console.log(`hello google `)
})
