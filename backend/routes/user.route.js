import express from "express";
import { check, logout, signin, signup } from "../cantrollers/auth.cantroller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter=express.Router();

authRouter.post("/signup",signup);
authRouter.post("/signin",signin);
authRouter.post("/logout",authMiddleware,logout); 
authRouter.get("/check",authMiddleware,check)


export default authRouter;
