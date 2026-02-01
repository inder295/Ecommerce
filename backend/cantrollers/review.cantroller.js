import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

export const createReview=async(req ,res)=>{
     
    const {rating,title,description}=req.body;
    const userId=req.user.id;
    const productId=req.params.productId;

    console.log(productId,rating,title,description,userId);
    

    if(!productId || !rating || !title || !description){
        return res.status(400).json({
            message:"All fields are required"
        })
    }

    try {
        const review=await prisma.review.create({
            data:{
                userId:userId,
                productId:productId,
                rating:parseInt(rating),
                title:title,
                description:description
            }
        })

        return res.status(201).json({
            message:"Review added successfully.",
            
        })

    } catch (error) {
        
        return res.status(500).json({
            message:"Error in adding review.Please try again later."
        })
    }
}

export const getProductReviews=async(req,res)=>{
    const {productId}=req.params;

    try {
        const review=await prisma.review.findMany({
            where:{
                productId:productId
            },
            include:{
                user:true
            }
        })
        return res.status(200).json({
            message:"Reviews fetched successfully.",
            reviews:review
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error in fetching reviews.",
            error:error.message
        })
    }
}