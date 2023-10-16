const express=require("express");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();
const path= require("path");

connectDb();


const app=express();

const port = process.env.PORT || 3001;
app.use(express.json());
app.get("/",(req,res)=>{
    // console.log(path.join(__dirname,"index.html"))
    res.sendFile(path.join(__dirname,"frontend/index.html"));
});
app.use("/api/books",require("./routes/bookRoutes"));
app.listen(5000,()=>{

console.log(`Sever is running on port ${port}`);
});