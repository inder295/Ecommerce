import express from "express";
import { addAddress, deleteAddress, getAllAddresses } from "../cantrollers/address.cantroller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const addressRouter = express.Router();

addressRouter.use(authMiddleware);

addressRouter.post('/add-address',addAddress);
addressRouter.get('/get-all-addresses',getAllAddresses);
addressRouter.delete('/delete-address/:id',deleteAddress);

export default addressRouter;