import express from "express";
import { adminLogout, adminSignin, check, logout, signin, signup } from "../cantrollers/auth.cantroller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";

const authRouter=express.Router();

authRouter.post("/signup",signup);
authRouter.post("/signin",signin);
authRouter.post("/admin-signin",adminSignin);
authRouter.get('/admin-logout',authMiddleware,isAdmin,adminLogout)
authRouter.post("/logout",authMiddleware,logout); 
authRouter.get("/check",authMiddleware,check)


export default authRouter;
