import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const addRemoveWishlistItem=async (req,res)=>{
  
    const {productId}=req.params;
    const userId=req.user.id;

    
    if(!productId || !userId){
        return res.status(400).json({
            message:"credentials are missing."
        })
    }

    try {
        const item=await Prisma.wishlist.findFirst({
           where:{
             userId:userId,
             productId:productId
           }
        })

        if(!item){
            await Prisma.wishlist.create({
                data:{
                    userId:userId,
                    productId:productId
                }
            })

            return res.status(200).json({
                message:"Product added in wishlist"
            })

        }else{
            await Prisma.wishlist.deleteMany({
                where:{
                    userId:userId,
                    productId:productId
                }
            })

            return res.status(200).json({
                message:"Product removed from wishlist",
            })
        }
        

    } catch (error) {
        return res.status(400).json({
            message:"Something went wrong.",
            error:error
        })
    }
    
}

export const getWishlistItems=async(req,res)=>{
    
    const userId=req.user.id;

    if(!userId){
        return res.status(400).json({
            message:"Authentication required",
        })
    }

    const WishlistItems=await Prisma.wishlist.findMany({
        where:{
            userId:userId
        }
    });
    
    return res.status(200).json({
        message:"All wishlist items fetched successfully",
        items:WishlistItems
    })
}