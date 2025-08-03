import express from "express";
import { addToCart, cartSummary, deleteProductFromCart, getCartItems, getCartItemsByCount, getCartTotalPrice, subtractCartItemByQuantity } from "../cantrollers/cart.cantroller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const cartRouter=express.Router();

cartRouter.use(authMiddleware);

cartRouter.put("/add-to-cart",addToCart);
cartRouter.put("/subtract-from-cart",subtractCartItemByQuantity);
cartRouter.get("/get-cart-items",getCartItems);
cartRouter.get("/get-cart-items-by-count",getCartItemsByCount);
cartRouter.delete("/delete-cart-item/:productId",deleteProductFromCart);
cartRouter.get("/get-cart-total-amount",getCartTotalPrice);
cartRouter.get("/get-cart-summary",cartSummary);

export default cartRouter; 