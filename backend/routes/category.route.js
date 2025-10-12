import express from "express";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "../cantrollers/category.cantroller.js";

const categoryrouter=express.Router();

categoryrouter.post("/create-category",authMiddleware,isAdmin,createCategory);
categoryrouter.get("/getAllCategories",getAllCategories);
categoryrouter.delete("/delete-category/:id",authMiddleware,isAdmin,deleteCategory);
categoryrouter.put("/updateCategory/:id",authMiddleware,isAdmin,updateCategory);




export default categoryrouter;

