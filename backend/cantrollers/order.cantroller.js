import { PaymentStatus, PrismaClient } from "@prisma/client";
import { sendOrderConfirmationEmail } from "../utils/mail-templates.js/order-confirmation-template.js";
 

const Prisma=new PrismaClient();

export const placeOrder=async(req,res)=>{
    const userId=req.user.id;
    const {addressId,shipmentMehod,paymentMethod}=req.body;

    if(!addressId || !shipmentMehod || !paymentMethod){
        return res.status(400).json({
            message:"Error in placing the order"
        })
    }

    if(!(shipmentMehod=="FREE") && !(shipmentMehod=="PAID")){
        return res.status(401).json({
            message:"Please select shipment method"
        })
    }

    if(!paymentMethod){
        return res.json(404).json({
            message:"payment method is required."
        })
    }

    if(paymentMethod=="SRIPE"){
       //will integrate in future
    }

    

    try {
        const {order,address,items}=await Prisma.$transaction(async (tx)=>{

            const orderItems=await tx.cartItems.findMany({
                where:{
                    userId:userId
                },
                include:{
                    product:true
                }
            })

            if(orderItems.length===0){
                return res.status(400).json({
                    message:"No items in cart to place order"
                })
            }

            await tx.cartItems.deleteMany({
                where:{
                    userId:userId
                }
            })         

            const grandTotal=await orderItems.reduce((total,item)=>total + item.totalPrice,0)
            

            const order=await tx.order.create({

                data:{
                    userId:userId,
                    addressId:addressId,
                    paymentMethod:paymentMethod,
                    paymentStatus:PaymentStatus.SUCCESS,
                    shipmentMehod:shipmentMehod,
                    orderStatus:"PENDING",
                    grandTotal:grandTotal,
                    shipmentMehod:shipmentMehod,
                    orderItem:{
                        create:orderItems.map(item=>({
                            productId:item.productId,
                            name:item.product.name,
                            image:item.product.image,
                            price:item.product.price,
                            quantity:item.quantity,
                            totalPrice:item.totalPrice
                        }))
                    },
                    },
                    include:{
                        user:true
                    }                 
                })

                for(const item of orderItems){
                    await tx.product.update({
                        where:{
                            id:item.productId
                        },
                        data:{
                            inventory:{
                                decrement:item.quantity
                            }
                        }
                    })
                }

               


                const address=await tx.address.findUnique({
                where:{
                    id:addressId
                }
        })

         if(!address){
            return res.status(404).json({
                message:"Address not found"
            })
        }

        const items=await tx.orderItem.findMany({
            where:{
                orderId:order.id
            }
        })
                return {order,address,items};
    });

    await sendOrderConfirmationEmail(order,items,address);

    res.status(200).json({
        message:"Order placed successfully",
        order:order,
        adreess:address,
        products:items
    })


    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Error in creating Order.Please try again later."
        })
    }
}

        