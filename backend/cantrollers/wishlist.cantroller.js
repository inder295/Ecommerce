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
       
        const product=await Prisma.product.findFirst({
                where:{
                    id:productId
                }
        })

        if(!product){
            return res.status(400).json({
                message:"product not existed."
            })
        }

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
        },
        select:{
           productId:true
        }
    });

    const productIds = WishlistItems.map(item => item.productId);


    const items=await Prisma.product.findMany({
        where:{
            id:{ 
                in:productIds
            }
        }
    })
    
    return res.status(200).json({
        message:"All wishlist items fetched successfully",
        items:items
    })
}

export const checkWishlistItem=async(req,res)=>{

    const {productId}=req.params;
    const userId=req.user.id;
    
    try {
        const item=await Prisma.wishlist.findFirst({
            where:{
                userId:userId,
                productId:productId
            }
        }) 

        if(!item){
            return res.status(200).json({
                present:false
            })
        }

        return res.status(201).json({
            present:true
        })

    } catch (error) {
        return res.status(400).json({
            message:"something went wrong"
        })
    }


}
