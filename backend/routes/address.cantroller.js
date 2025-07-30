import express from "express";
import { addAddress, deleteAddress, getAllAddresses } from "../cantrollers/address.cantroller.js";

const addressRouter = express.Router();

addressRouter.post('/add-address',addAddress);
addressRouter.post('/get-all-addresses',getAllAddresses);
addressRouter.post('/delete-address/:id',deleteAddress);

export default addressRouter;