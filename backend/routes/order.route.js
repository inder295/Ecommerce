import express from 'express';
import { changeOrderStatus, getAllOrderOfUser, getAllOrders, getUserOrderById, orderConfirmation, placeOrder } from '../cantrollers/order.cantroller.js';
import { authMiddleware, isAdmin } from '../middleware/auth.middleware.js';
// import bodyParser  from 'body-parser';
const orderRouter=express.Router();



orderRouter.post("/place-order",authMiddleware,placeOrder);
orderRouter.patch("/update-order-status/:orderId",isAdmin ,changeOrderStatus);
orderRouter.get("/all-orders",isAdmin,getAllOrders);
orderRouter.get("/my-orders",authMiddleware,getAllOrderOfUser);
orderRouter.get("/my-order/:orderId",getUserOrderById);
orderRouter.get("/order-confirmation/:session_id", authMiddleware, orderConfirmation);



export default orderRouter;