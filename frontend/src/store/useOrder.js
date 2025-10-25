import { create } from "zustand";
import { placeOrder } from "../Api/orders.api";
import toast from "react-hot-toast";


export const useOrders=create((set)=>({
    placingOrder:false,
    orderDetails:null,
    orderAddress:null,
    orderedProducts:null,

    placeOrder:async (formData)=>{
        try {
            set({placingOrder:true})
            const data=await placeOrder(formData);
            toast.success(data.message);
            set({orderDetails:data.order})
            set({orderAddress:data.adreess});
            set({orderedProducts:data.products});
            return true;
        } catch (error) {
            toast.error("Something went wrong, "+ error.message);
            
        }finally{
            set({placingOrder:false})
        }
    }
}))