import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripePaymentMethod=async(orderItems,userId,addressId,shipmentMethod,paymentMethod)=>{
    
   console.log(userId,addressId,shipmentMethod,paymentMethod);
   
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
           success_url:`${process.env.FRONTEND_URL}/cart/checkout/order-success?session_id={CHECKOUT_SESSION_ID}`,
           cancel_url:`${process.env.FRONTEND_URL}/cart`,
           metadata: {
            userId: userId,
            addressId: addressId,
            shipmentMethod: shipmentMethod,  
            paymentMethod: paymentMethod,
         }

      })

      

    return session;
    
}