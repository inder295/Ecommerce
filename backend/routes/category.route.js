import express from "express";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";
import { createCategory } from "../cantrollers/category.cantroller.js";

const categoryrouter=express.Router();

categoryrouter.post("/create-category",authMiddleware,isAdmin,createCategory);


export default categoryrouter;

