const express=require("express");
const router=express.Router();

const{CreateBook,getBook, deleteBook} =require("../Controllers/bookControllers");

router.get("/getbooks",getBook);
router.post("/register",CreateBook);
router.delete("/delete",deleteBook);

// router.route("/:id").get()

module.exports=router;
