import dotenv from 'dotenv';
import Stripe from "stripe";
import { createOrder } from "../orders/create-order.js";
import { sendOrderConfirmationEmail } from '../mail-templates.js/order-confirmation-template.js';

dotenv.config();

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);

export const verifyStripePayment=async(req,res)=>{

    const sig = req.headers["stripe-signature"];

    let event;

    

    try {
        event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error("Webhook error:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {

        if(event.type === "checkout.session.completed") {
        const session =event.data.object;

        
        const userId=session.metadata.userId;
        const addressId=session.metadata.addressId;
        const shipmentMethod = session.metadata.shipmentMethod;  
        const paymentMethod=session.metadata.paymentMethod;

    
        const {order,address,items}=await createOrder(addressId,shipmentMethod,paymentMethod,userId);

        await sendOrderConfirmationEmail(order,items,address);
        

        return res.status(200).json({
            message:"Order created successfully from Stripe payment",
            order:order,
            address:address,
            items:items
        })
    }

        
    } catch (error) {
        return  res.status(500).json({
            message:"Error in creating order from stripe payment"
        })
    }
    
    
}