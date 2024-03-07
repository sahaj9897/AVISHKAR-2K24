const express=require('express')
const app=express();
app.use(express.json());
const moragan= require('morgan');
const dotenv=require('dotenv');
dotenv.config()
app.get("/",(req,res)=>{
    res.status(200).send({
        message:"Server is running",
    })
})

//listen port 
const port =process.env.port || 5173
app.listen(port,()=>{
    console.log("server Running in ${process.env.NODE_MODE} port=${process.env.PORT}")
})