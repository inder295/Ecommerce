import sendMail from "../mail/mail.js";

export const orderCompleted=async (order)=>{

    const html=`
        <h2>Order Completed</h2>
        <p>Hi ${order.user.name},</p>
        <p>Your order with ID <strong>${order.id}</strong> has been completed successfully
        </p>
        <p>Thank you for shopping with us!</p>
  
        <p>We hope you enjoy your purchase! If you have any questions, feel free to contact us.</p>
        <p>Best regards,</p>
    `
        


    await sendMail(order.user.email, "Order Completed", html)

}