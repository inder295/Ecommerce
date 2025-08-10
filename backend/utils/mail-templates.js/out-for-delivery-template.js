import sendMail from "../mail/mail.js";

export const outForDelivery=async (order)=>{

    const html=`
     <h2>Your order is out for delivery!</h2>
        <p>Hi ${order.user.name},</p>
        <p>Your order with ID <strong>${order.id}</strong> is now out for delivery! 🚚</p>
        <p>Thank you for shopping with us!</p>

    `

    await sendMail(order.user.email, "Order Out for Delivery", html)

}