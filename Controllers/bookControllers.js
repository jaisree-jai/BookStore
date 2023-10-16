
const express=require("express");
const asyncHandler=require("express-async-handler");
const bookSchema = require("../models/bookmodel");
const bookmodel = require("../models/bookmodel");

const CreateBook=asyncHandler(async(req,res)=>{
    const {name,author,price} = req.body;
    if(!name ||!author ||!price){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
 const bookAvailable=await bookmodel.findOne({name});
   if(bookAvailable){
    res.status(400);
    throw new Error("Email already exists");
   }
    const book=await bookSchema.create({
        name,author,price
    });
    res.status(201).json(book);
});

const getBook = asyncHandler(async(req,res)=>{
    const book=await bookmodel.find();
    res.status(200).json(book);
});

const deleteBook = asyncHandler(async(req,res)=>{
    const {name}=req.body;
    if(!name){
        res.status(400);
        throw new Error("name required");
    } 
    const book= await bookmodel.findOne({name});
    await bookmodel.deleteOne();
    res.status(200).json(book);
});

module.exports={CreateBook,getBook,deleteBook};