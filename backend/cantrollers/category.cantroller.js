import { PrismaClient } from "@prisma/client";

const Prisma=new PrismaClient();

export const createCategory=async(req,res)=>{
    const {name,description}=req.body;

    if(!name || !description){
        return res.status(400).json({
            message:"Name and description are required"
        })
    }

    try {
        const existingCategory=await Prisma.category.findUnique({
            where:{
                name:name
            }
        })

        if(existingCategory){
            return res.status(400).json({
                message:"Category already exists"
            })
        }


        const category=await Prisma.category.create({
            data:{
                name:name,
                description:description
            }
        })

        res.status(201).json({
            message:"category created successfully",
            category:category
        })

    } catch (error) {
        return res.status(500).json({
            message:"Error in creating category",
            error:error.message
        })
    }
}