import express from "express"
import { sales, ordersData } from "../cantrollers/analytics.cantroller.js";

const analyticsRouter=express.Router();



analyticsRouter.get('/orders',ordersData)
analyticsRouter.get("/sales",sales)

export default analyticsRouter;