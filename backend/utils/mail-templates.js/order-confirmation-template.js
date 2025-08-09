import sendMail from "../mail/mail.js";


export const sendOrderConfirmationEmail=async (order,items) =>{

    const htmlContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #4CAF50;">Order Confirmation</h2>
    <p>Hi ${order.user.name},</p>
    <p>Your order has been placed successfully! 🎉</p>

    <p><strong>Order ID:</strong> ${order.id}</p>

    <h3>Order Summary:</h3>
    <table style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px;">Product</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(item => `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align:center;">${item.quantity}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">$${item.price.toLocaleString()}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">$${item.totalPrice.toLocaleString()}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <p style="margin-top: 15px; font-size: 16px;">
      <strong>Grand Total:</strong> $${items.reduce((total, item) => total + item.totalPrice, 0).toLocaleString()}
    </p>

    <p>Thank you for shopping with us ❤️</p>
  </div>
`;


    await sendMail(order.user.email, "Order Confirmation", htmlContent);

}
