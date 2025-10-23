import { PaymentStatus, PrismaClient } from "@prisma/client";
import { sendOrderConfirmationEmail } from "../utils/mail-templates.js/order-confirmation-template.js";
import { outForDelivery } from "../utils/mail-templates.js/out-for-delivery-template.js";
import { orderCompleted } from "../utils/mail-templates.js/order-completed-template.js";
 

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
        return res.status(404).json({
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

export const changeOrderStatus=async(req,res)=>{
    const {orderId}=req.params;
    const {status}=req.body;

    if(!orderId || !status){
        return res.status(400).json({
            message:"Order ID and status are required"
        })
    }

    try {
        const order=await Prisma.order.findUnique({
            where:{
                id:orderId
            }
        })

        if(!order){
            return res.status(404).json({
                message:"Order not found"
            })
        }

        if(order.orderStatus==="DELIVERED"){
            return res.status(400).json({
                message:"Order already delivered"
            })
        }

        if(order.orderStatus==="CANCELLED"){
            return res.status(400).json({
                message:"Order already cancelled"
            })
        }

        if(order.orderStatus===status){
            return res.status(400).json({
                message:"Order status is already set in this status"
            })
        }

        const updatedOrder=await Prisma.order.update({
            where:{
                id:orderId
            },
            data:{
                orderStatus:status
            },
            include:{
                user:true
            }
        })

        if(status==="OUT_FOR_DELIVERY"){
            await outForDelivery(updatedOrder);
        }

        if(status==="COMPLETE"){
            await orderCompleted(updatedOrder);
        }

        res.status(200).json({
            message:"Order status updated successfully",
            orderId:updatedOrder,
        })
            

    } catch (error) {

        return res.status(500).json({
            message:"Error in updating order status",
            error:error.message
        })
        
    }
}

export const getAllOrders=async(req,res)=>{
    try {
        const orders=await Prisma.order.findMany({
            orderBy:{
                createdAt:"desc"
            }

        })

        res.status(200).json({
            message:"Orders fetched successfully",
            orders:orders
        })  
    } catch (error) {

        return res.status(500).json({
            message:"Error in fetching orders",
            error:error.message
        })
        
    }
}

export const getAllOrderOfUser=async(req,res)=>{
    const userId=req.user.id;

    try {
        const orders=await Prisma.order.findMany({
            where:{
                userId:userId
            },
            orderBy:{
                createdAt:"desc"
            }
        })

        res.status(200).json({
            message:"Orders fetched successfully",
            orders:orders
        })
    } catch (error) {

        return res.status(500).json({
            message:"Error in fetching orders",
            error:error.message
        })
        
    }
}

export const getUserOrderById=async(req,res)=>{
    const userId=req.user.id;
    const {orderId}=req.params;

    if(!orderId){
        return res.status(400).json({
            message:"Order ID is required"
        })
    }

    try {
        const order=await Prisma.order.findUnique({
            where:{
                id:orderId
            }
        })

        if(!order){
            return res.status(404).json({
                message:"Order not found"
            })
        }

        res.status(200).json({
            message:"Order fetched successfully",
            order:order
        })

    } catch (error) {
        
        return res.status(500).json({
            message:"Error in fetching order",
            error:error.message
        })
        
    }
}



        