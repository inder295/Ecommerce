import express from "express";
import { addAddress, deleteAddress, getAllAddresses } from "../cantrollers/address.cantroller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const addressRouter = express.Router();


addressRouter.post('/add-address',authMiddleware,addAddress);
addressRouter.get('/get-all-addresses',authMiddleware,getAllAddresses);
addressRouter.delete('/delete-address/:id',authMiddleware,deleteAddress);

export default addressRouter;