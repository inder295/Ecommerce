import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();



export const createProduct=async (req,res)=>{

    const {name,description,price,inventory}=req.body;
    console.log("Received product data")
    const image=req.file? req.file.buffer.toString("base64"):null;

    

    if(!name || !description || !price || !inventory) {
        return res.status(400).json({ message: "All fields are required" });
    }



    try {
        const product=await Prisma.product.create({
        data:{
            name:name,
            description:description,
            price:parseFloat(price),
            inventory:parseInt(inventory),
            image:image
        }
    })

    res.status(201).json({
        message:"Product created successfully",
        product:product
    })
    } catch (error) {
        res.status(500).json({
            message:"Error in creating product",
            error:error.message
        });
        
    }
}