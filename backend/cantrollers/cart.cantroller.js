import { PrismaClient } from "@prisma/client";
const Prisma=new PrismaClient();

/**
 * 
 * userId -> cart ,
 * 
 */


export const addToCart=async(req,res)=>{

    const {productId,quantity}=req.body;
    const userId=req.user.id;

    if(!productId){
        return res.status(400).json({
            message:"Product Id is required"
        })
    }

    if(!quantity || quantity <=0){
        return res.status(400).json({
            message:"Quantity is required "
        })
    }

    try {
        const item =await Prisma.product.findUnique({where:{id:productId}});
        
        if(!item){
            return res.status(404).json({
                message:"Product not found"
        })

    }

        if(item.inventory < quantity){
            return res.status(400).json({
                message:"Insufficient inventory for this product"
            })
        }
        
       const result = await Prisma.$transaction(async (tx)=>{


        const cartItem=await tx.cartItems.findMany({
            where:{
                userId:userId
            },
            include:{
                product:true
            }
          })

          const existingCartItem=cartItem.find(item=> item.productId === productId);
          if(existingCartItem){
            return await tx.cartItem.update({
                where:{
                    id:existingCartItem.id

                },
                data:{
                    quantity:existingCartItem.quantity + quantity,
                    totalPrice:existingCartItem.totalPrice + (existingCartItem.product.price * quantity)
                }
            })
          }

          return await tx.cartItems.create({
            data:{
                userId:userId,
                productId:productId,
                quantity:quantity,
                totalPrice:quantity* item.price
            }
          })
         
       })

       return res.status(201).json({
         message:"Product added to cart successfully",
         cartItem:result
       })



    } catch (error) {

        return res.status(500).json({
            message:"Error in adding product to cart",
            error:error.message
        })
        
    }
}

export const subtractCartItemByQuantity=async(req,res)=>{

    const {productId,quantity}=req.body;
    const userId=req.user.id;

    if(!productId){
        return res.status(400).json({
            message:"Product not found"
        })
    }


    if(!quantity || quantity <=0){
        return res.status(400).json({
            message:"Quantity is required "
        })
    }

    try {

        const item=await Prisma.product.findUnique({
            where:{
                id:productId
            }
        })

        if(!item){
            return res.status(404).json({
                message:"Product not found"
            })
        }

        const cartItem=await Prisma.cartItems.findFirst({
            where:{
                userId:userId,
                productId:productId
            }
        })

        if(!cartItem){
            return res.status(404).json({
                message:"Cart item not found"
            })
        }

        if(cartItem.quantity < quantity){
            return res.status(400).json({
                message:"Insufficient quantity in cart"
            })
        }

        if(cartItem.quantity === quantity){
            await Prisma.cartItems.delete({
                where:{
                    productId:cartItem.id
                }
            })

            return res.status(200).json({
                message:"Product item removed successfully"
            })
        }

        const updatedCartItem=await Prisma.cartItems.update({
            where:{
                productId:cartItem.id,
                userId:userId
            },
            data:{
                quantity:cartItem.quantity-quantity,
                totalPrice:cartItem.totalPrice - (item.price * quantity)
            }
        })

        return res.status(200).json({
            message:"Cart item updated successfuly",
            cartItem:updatedCartItem
        })  
        
        

    } catch (error) {

        return res.status(500).json({
            message:"Error in subtracting cart item",
            error:error.message
        })
        
    }




}

export const getCartItems=async(req,res)=>{
    const userId=req.user.id;
    try {
        const cartItems=await Prisma.cartItems.findMany({
            where:{
                userId:userId
            },
            include:{
                product:true,
            }
        })

        if(cartItems.length === 0){
            return res.status(404).json({
                message:"Cart is empty"
            })
        }

        res.status(200).json({
            message:"Cart items fetched successfully",
            cartItems:cartItems
        })

    } catch (error) {

        return res.status(500).json({
            message:"Error in fetching cart items",
            error:error.message
        })
        
    }
}

export const getCartItemsByCount=async(req,res)=>{
    const userId=req.user.id;
    try {
        const count=await Prisma.cartItems.count({
            where:{
                userId:userId
            }
        })

        return res.status(200).json({
            message:"Cart item count fetched successfully",
            count:count
        })
    } catch (error) {

        return res.status(500).json({
            message:"Error in fetching cart item count",
            error:error.message
        })
        
    }
}

export const deleteProductFromCart=async(req,res)=>{
    const {productId}=req.params;
    const userId=req.user.id;

    if(!productId){
        return res.status(400).json({
            message:"Product Id is required"
        })
    }

    try {
        const cartItem=await Prisma.cartItems.findFirst({
            where:{
                userId:userId,
                productId:productId
            }
        })

        if(!cartItem){
            return res.status(404).json({
                message:"Cart item not found"
            })
        }

        await Prisma.cartItems.delete({
            where:{
                id:cartItem.id
            }
        })

        return res.status(200).json({
            message:"Product removed from cart successfully"
        })

    } catch (error) {

        return res.status(500).json({
            message:"Error in deleting product from cart",
            error:error.message
        })
        
    }
}

export const getCartTotalPrice=async(req,res)=>{
    const userId=req.user.id;
    try {
        const cartItems=await Prisma.cartItems.findMany({
            where:{
                userId:userId
            },
            include:{
                product:true
            }
        })

        const totalPrice=cartItems.reduce(totalPrice=> totalPrice+ item.totalPrice,0);

        return res.status(200).json({
            message:"Cart total price fetched successfully",
            totalPrice:totalPrice
        })


    } catch (error) {
        return res.status(500).json({
            message:"Error in fetching cart total price",
            error:error.message
        })
        
    }
}