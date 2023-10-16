const mongoose=require("mongoose");
CONNECTION_STRING="mongodb+srv://19euit060:jais1227@jaisree.ki49iig.mongodb.net/Contact?retryWrites=true&w=majority";

const connectDb = async() =>{
    try{
        const connect=await mongoose.connect(CONNECTION_STRING);
        console.log("DATABASE CONNECTED :",connect.connection.host,connect.connection.name);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDb;