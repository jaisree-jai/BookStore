const mongoose= require("mongoose");

const bookSchema=mongoose.Schema({
    name:{
    type:String,
    required:[true,"Please add name"]
},
    author:{
        type:String,
        required:[true,"Please add name"]
    },
    price:{
        type:Number,
        required:[true,"Please add price"]
    }
});

module.exports=mongoose.model("bookSchema",bookSchema);