import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripePaymentMethod=async(orderItems,userId,addressId,shipmentMehod,paymentMethod)=>{

      const items=orderItems.map((item)=>({
         price_data:{
            currency:"usd",
            product_data:{
                name:item.product.name,
                images:[item?.product?.image[0]]
            },
            unit_amount:Math.round(item.product.price * 100)
         },
            quantity:item.quantity
      }))

      const session=await stripe.checkout.sessions.create({
           payment_method_types:['card'],
           line_items:items,
           mode:'payment',
           success_url:`${process.env.FRONTEND_URL}/cart/checkout/order-success`,
           cancel_url:`${process.env.FRONTEND_URL}/cart`,
           metadata:{
              userId:userId,
              addressId:addressId,
              shipmentMehod:shipmentMehod,
              paymentMethod:paymentMethod,
           }
      })

    return session;
    
}