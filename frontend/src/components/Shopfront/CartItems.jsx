import React, { useEffect } from "react"
import { useCart } from "../../store/useCart"
import Spinner from "./Spinner";

export const CartItems = () => {
        // use selectors to subscribe only to the pieces we need
      
        const fetchCartSummary = useCart(state => state.cartSummary);
        const fetchingSummary = useCart(state => state.fetchingSummary);
        const summary = useCart(state => state.summary);
        const fetchCartItems=useCart(state=>state.getCartItems);
        const cartItems=useCart(state=>state.cartItems)
        const fetchingCartItems=useCart(state=>state.fetchingCartItems)

        useEffect(()=>{
            fetchCartSummary();
            fetchCartItems();
        },[fetchCartSummary,fetchCartItems])

       

   
        // If we are not fetching but summary is still null, show a friendly empty state
        if (!fetchingSummary && !summary) {
            return (
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-xl font-medium">Your cart is empty</h2>
                    <p className="text-gray-500 mt-2">Add items to the cart to see the order summary.</p>
                </div>
            )
        }

        return (fetchingSummary || fetchingCartItems)? <Spinner/> : (
        <>
                 
        <div className="flex items-start md:flex-row max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl md-40'>


                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-indigo-500 ">{String(summary?.totalItems ?? "-")+ " Items"} </span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartItems.map((item, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                <img className="max-w-full h-full object-cover" src={item.product.image[0]} alt={item.product.name} />
                            </div>
                            <div>
                                <p className="font-semibold line-clamp-2 max-w-[150px]">{item.product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Size: <span>{item.size || "N/A"}</span></p>
                                    <div className='flex items-center'>
                                        <p>Qty:{item.quantity}</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">${String(item.totalPrice)}</p>
                        <button className="cursor-pointer mx-auto">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0" stroke="#FF532E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>)
                )}

               

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div>
                     <p className="text-sm font-medium uppercase mt-6">Coupon</p>

                    <input className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none" />
                       
                   
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Subprice</span><span>{summary?.SubPrice != null ? "$ "+String(summary.SubPrice) : "-"}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">{summary?.Shipping ?? "-"}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax </span><span>{summary?.Tax ?? "-"}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Grand Total</span><span>$ {summary?.GrandTotal ?? "-"}</span>
                    </p>
                </div>

                <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
                    Checkout
                </button>
            </div>
        </div>
        </>
    )
}