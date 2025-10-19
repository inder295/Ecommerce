import express from "express";
import { adminLogout, adminSignin, check, checkAdmin, logout, signin, signup } from "../cantrollers/auth.cantroller.js";
import { authMiddleware, checkAdminToken, isAdmin } from "../middleware/auth.middleware.js";

const authRouter=express.Router();

authRouter.post("/signup",signup);
authRouter.post("/signin",signin);
authRouter.post("/admin-signin",adminSignin);
authRouter.get('/admin-logout',checkAdminToken,adminLogout)
authRouter.post("/logout",authMiddleware,logout); 
authRouter.get("/check",authMiddleware,check)
authRouter.get("/admin-check",checkAdminToken,checkAdmin);


export default authRouter;
