import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { addRemoveWishlistItem, checkWishlistItem, getWishlistItems } from "../cantrollers/wishlist.cantroller.js";

const wishlistRouter=express.Router();

wishlistRouter.get('/add-remove-product-in-wishlist/:productId',authMiddleware,addRemoveWishlistItem);
wishlistRouter.get('/get-all-wishlist-items',authMiddleware,getWishlistItems);
wishlistRouter.get('/check-wishlist-item/:productId',authMiddleware,checkWishlistItem);


export default wishlistRouter;