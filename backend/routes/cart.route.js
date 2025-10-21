import express from "express";
import { addToCart, cartSummary, deleteProductFromCart, getCartItems, getCartItemsByCount, getCartTotalPrice, subtractCartItemByQuantity } from "../cantrollers/cart.cantroller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const cartRouter=express.Router();

cartRouter.use(authMiddleware);

cartRouter.put("/add-to-cart",authMiddleware,addToCart);
cartRouter.put("/subtract-from-cart",authMiddleware,subtractCartItemByQuantity);
cartRouter.get("/get-cart-items",authMiddleware,getCartItems);
cartRouter.get("/get-cart-items-by-count",authMiddleware,getCartItemsByCount);
cartRouter.delete("/delete-cart-item/:productId",authMiddleware,deleteProductFromCart);
cartRouter.get("/get-cart-total-amount",authMiddleware,getCartTotalPrice);
cartRouter.get("/get-cart-summary",authMiddleware,cartSummary);

export default cartRouter; 