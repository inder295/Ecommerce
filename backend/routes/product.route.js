import express from "express";
import { createProduct,deleteProducts,filterProducts,getAllProducts, getProductById, getProductHistory, getProductsByCategory, productHistory, searchProduct, updateProductById } from "../cantrollers/product.cantroller.js";
import { authMiddleware, checkAdminToken } from "../middleware/auth.middleware.js";
import multer from "multer";

const storage=multer.diskStorage({});
const upload=multer({storage:storage});

const productRouter=express.Router();


productRouter.post("/create-product",checkAdminToken,upload.array("image",10),createProduct);
productRouter.post("/delete-products",checkAdminToken,deleteProducts);
productRouter.patch("/update-product/:id",checkAdminToken,updateProductById);
productRouter.get("/get-products",getAllProducts)
productRouter.get("/:id",getProductById)
productRouter.get("/getProductsByCategory/:categoryId",getProductsByCategory);
productRouter.post("/search",searchProduct);
productRouter.post('/filter',filterProducts);
productRouter.post('/history/:productId',authMiddleware,productHistory);
productRouter.get('/get-product-history',authMiddleware,getProductHistory)



export default productRouter;