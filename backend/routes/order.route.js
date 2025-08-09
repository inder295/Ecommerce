import express from 'express';
import { placeOrder } from '../cantrollers/order.cantroller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const orderRouter=express.Router();

orderRouter.use(authMiddleware);

orderRouter.post("/place-order",placeOrder);


export default orderRouter;