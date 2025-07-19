import express from "express";
import { createProduct } from "../cantrollers/product.cantroller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";
import multer from "multer";

const storage=multer.memoryStorage();
const upload=multer({storage})

const productRouter=express.Router();

productRouter.post("/create-product",authMiddleware,isAdmin,upload.single("image"),createProduct);


export default productRouter;