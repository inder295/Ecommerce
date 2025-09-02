import express from "express";
import { adminSignin, check, logout, signin, signup } from "../cantrollers/auth.cantroller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter=express.Router();

authRouter.post("/signup",signup);
authRouter.post("/signin",signin);
authRouter.post("/admin-signin",adminSignin);
authRouter.post("/logout",authMiddleware,logout); 
authRouter.get("/check",authMiddleware,check)


export default authRouter;
