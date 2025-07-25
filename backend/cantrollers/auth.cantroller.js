import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma =new PrismaClient();

export const signup = async(req,res) =>{
    const {name,email,password}=req.body;
    try {
        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser=await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(existingUser){
            res.status(400).json({
                message:"User already exists with this email"
            })
        }

        const hashedPassword=await bcrypt.hash(password,10);
        if(!hashedPassword){
            return res.status(500).json({
                message:"Error hashing password",
                error
            })
        }

        const user=await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:hashedPassword
            }
        })

        res.status(201).json({
            message:"User created sucessfully",
            user:user
        })
    } catch (error) {

        res.status(500).json({
            message:"Internal server error",
            error:error.message
        });
        
    }
}

export const signin=async (req,res)=>{
    const {email,password}=req.body;
    try {
        if(!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user=await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(!user){
            return res.status(404).json({
                message:"User not found "
            })
        }

        const comparedPassword=await bcrypt.compare(password,user.password);
        if(!comparedPassword){
            return res.status(400).json({
                message:"Invalid credentials"
            })
        }

        const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{
            expiresIn:"1d"
        })

        const cookieOptions={
            httpOnly:true
        }

        res.cookie("token",token,cookieOptions);

        res.status(200).json({
            message:"User signed in successfully"
        })


    } catch (error) {

        res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
        
    }
}

export const logout=async (req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({
            message:"User logged out successfully"
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error:error.message
        });
        
    }
}