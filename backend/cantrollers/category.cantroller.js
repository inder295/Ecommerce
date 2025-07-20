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

export const getAllCategories=async(req,res)=>{
    try {
        const categories=await Prisma.category.findMany();
        res.status(200).json({
            message:"Categories fetched successfully",
            categories:categories
        })
    } catch (error) {
          return res.status(500).json({
            message:"Error in fetching categories",
            error:error.message
          })       
    }
}

export const deleteCategory=async(req,res)=>{
    const {id}=req.params;
    try {
        const category=await Prisma.category.findUnique({
            where:{
                id:id
            }
        })

        if(!category){
            return res.status(404).json({
                message:"Category not found"
            })
        }

        await Prisma.category.delete({
            where:{
                id:id
            }
        })

        res.status(200).json({
            message:"Category deleted successfully"
        })
    } catch (error) {

        return res.status(500).json({
            message:"Error in deleting category",
            error:error.message
        })

    }
        
}

export const updateCategory=async(req,res)=>{
    const {id}=req.params;
    const {name,description}=req.body;

    try {
        const category=await Prisma.category.findUnique({
            where:{
                id:id
            }
        })

        if(!category){
            return res.status(404).json({
                message:"Category not found"
            })
        }

        const updatedCategory=await Prisma.category.update({
            where:{
                id:id
            },
            data:{
                name:name || category.name,
                description:description || category.description
            }
        })

        res.status(200).json({
            message:"Category updated successfully",
            category:updatedCategory
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error in updating category",
            error:error.message
        })
    }
}



