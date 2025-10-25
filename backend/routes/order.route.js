import express from 'express';
import { changeOrderStatus, getAllOrderOfUser, getAllOrders, getUserOrderById, placeOrder } from '../cantrollers/order.cantroller.js';
import { authMiddleware, isAdmin } from '../middleware/auth.middleware.js';

const orderRouter=express.Router();



orderRouter.post("/place-order",authMiddleware,placeOrder);
orderRouter.patch("/update-order-status/:orderId",isAdmin ,changeOrderStatus);
orderRouter.get("/all-orders",isAdmin,getAllOrders);
orderRouter.get("/my-orders",getAllOrderOfUser);
orderRouter.get("/my-order/:orderId",getUserOrderById);


export default orderRouter;