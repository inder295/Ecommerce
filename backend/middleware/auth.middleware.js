import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma=new PrismaClient();
export const authMiddleware=async (req,res,next)=>{
    
    const token=req.cookies.token;
    
    
   
    if(!token){
        return res.status(401).json({
            authenticated:false,
            message:"Unauthorized access, please login first"
        })
    }

    let decoded;

    try {
        decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user= await prisma.user.findUnique({
            where:{
                id:decoded.id
            }
        })

        if(!user){
            return res.status(401).json({
                message:"Unauthorized access,user not found"
            })
        }

        req.user=user;
        next();



    } catch (error) {
        res.status(401).json({
            message:"Invalid token, please login again",
            error:error.message
        })
    }
}

export const checkAdminToken=async(req,res,next)=>{
    const token=req.cookies.admin_token;

    if(!token){
        return res.status(400).json({
            message:"Unauthorized access, admin login required"
        })
    }

    let decode;

    try {
        decode=jwt.verify(token,process.env.JWT_SECRET);
         
        const user=await prisma.user.findUnique({
            where:{
                id:decode.id
            }
        })

        if(!user || user.role !=="ADMIN"){
            return res.status(401).json({
                message:"Unauthorized access, admin privileges required"
            })
        }

        req.user=user;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid admin token, please login again",
            error:error.message
        })
    }
}

export const isAdmin=async(req,res,next)=>{
    if(req.user.role !=="ADMIN"){
        return res.status(401).json({
            message:"Unauthorized access, admin privileges required"
        })
    }

    next();
}

