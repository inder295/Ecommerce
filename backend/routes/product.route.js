import express from "express";
import { createProduct,deleteProducts,getAllProducts, getProductById, updateProductById } from "../cantrollers/product.cantroller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";
import multer from "multer";

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename:function(req,file,cb){
        const suffix=Date.now();
        cb(null,suffix+"-"+file.originalname)
    }

});


const upload=multer({storage:storage});

const productRouter=express.Router();


productRouter.post("/create-product",authMiddleware,isAdmin,upload.single("image"),createProduct);
productRouter.post("/delete-products",authMiddleware,isAdmin,deleteProducts);
productRouter.get("/get-products",authMiddleware,getAllProducts)
productRouter.get("/:id",authMiddleware,getProductById)
productRouter.put("/update-product/:id",authMiddleware,isAdmin,updateProductById);



export default productRouter;