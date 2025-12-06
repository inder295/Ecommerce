import express from "express"
import { weeklySales, ordersData } from "../cantrollers/analytics.cantroller.js";

const analyticsRouter=express.Router();



analyticsRouter.get('/orders',ordersData)
analyticsRouter.get("/weeklySales",weeklySales)

export default analyticsRouter;