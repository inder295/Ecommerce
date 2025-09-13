import express from "express";
import { createProduct,deleteProducts,getAllProducts, getProductById, getProductsByCategory, updateProductById } from "../cantrollers/product.cantroller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";
import multer from "multer";

const storage=multer.diskStorage({});
const upload=multer({storage:storage});

const productRouter=express.Router();


productRouter.post("/create-product",authMiddleware,isAdmin,upload.array("image",10),createProduct);
productRouter.post("/delete-products",authMiddleware,isAdmin,deleteProducts);
productRouter.patch("/update-product/:id",authMiddleware,isAdmin,updateProductById);
productRouter.get("/get-products",getAllProducts)
productRouter.get("/:id",getProductById)
productRouter.get("/getProductsByCategory/:categoryId",getProductsByCategory);



export default productRouter;