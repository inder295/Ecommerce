import express from "express";
import { logout, signin, signup } from "../cantrollers/auth.cantroller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter=express.Router();

authRouter.post("/signup",signup);
authRouter.post("/signin",signin);
authRouter.post("/logout",authMiddleware,logout); 


export default authRouter;
