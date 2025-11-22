import { PrismaClient } from "@prisma/client";
import { sendOrderConfirmationEmail } from "../utils/mail-templates.js/order-confirmation-template.js";
import { outForDelivery } from "../utils/mail-templates.js/out-for-delivery-template.js";
import { orderCompleted } from "../utils/mail-templates.js/order-completed-template.js";
import { stripePaymentMethod } from "../utils/payment-methods/stripe.js";
import { createOrder } from "../utils/orders/create-order.js";
import dotenv from 'dotenv';
import Stripe from "stripe";

dotenv.config();

const Prisma=new PrismaClient();
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);

export const placeOrder=async(req,res)=>{
    const userId=req.user.id;
    let {addressId,shipmentMehod,paymentMethod}=req.body;
    
    
    addressId=addressId[0];
    shipmentMehod=shipmentMehod[0];
    paymentMethod=paymentMethod[0];
    

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

       const orderItems=await Prisma.cartItems.findMany({
            where:{
                userId:userId
            },
            include:{
                product:true
            }
        })
    
        

        if(orderItems.length===0 || !orderItems){
        return res.status(400).json({
            message:"No items in cart to place order"
        })
    }
        
    try {

            if(paymentMethod==="COD"){
                const sessionId="";
                const {order,address,items}=await createOrder(addressId,shipmentMehod,paymentMethod,userId,sessionId);
                // await sendOrderConfirmationEmail(order,items,address);
 
                return  res.status(200).json({
                        message:"Order placed successfully",
                        order:order,
                        adreess:address,
                        products:items
                    })
            }

            if(paymentMethod==="STRIPE"){
                const session=await stripePaymentMethod(orderItems,userId,addressId,shipmentMehod,paymentMethod);

              

                return await res.status(200).json({
                    message:"Stripe session created successfully",
                    sessionId:session.id,
                    url:session.url
                })
            }


    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Error in creating Order.Please try again later."
        })
    }
}

export const orderConfirmation=async(req,res)=>{
      const { session_id } = req.params;

    if(!session_id){
        return res.status(400).json({
            message:"Session Id is required."
        })
    }

    try {
        
        const order=await Prisma.order.findFirst({
            where:{
                sessionId:session_id
            },
            include:{
                orderItem:true,
                user:true,
                address:true

            }
        })

        if(!order){
            return res.status(404).json({
                message:"Error in order creation.PLease try again later."
            })
        }

        return res.status(200).json({
            message:"Order confirmed successfully",
            order:order
        })

    } catch (error) {
        return res.status(500).json({
            message:"Error in fetching order details",
            error:error.message
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



        