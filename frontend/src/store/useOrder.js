import { create } from "zustand";
import { getUsersOrders, orderConfirmation, placeOrder } from "../Api/orders.api";
import toast from "react-hot-toast";


export const useOrders=create((set)=>({
    placingOrder:false,
    loadingOrder:false,
    orderDetails:null,
    orderAddress:null,
    orderedProducts:null,
    fetchingUserOrders:false,

    placeOrder:async (formData)=>{
        try {
            set({placingOrder:true})
            const data=await placeOrder(formData);
            
             if(data.url){
                window.location.href=data.url;
                return;
                 
             }else{
                    toast.success(data.message);
                    set({orderDetails:data.order})
                    set({orderAddress:data.adreess});
                    set({orderedProducts:data.products});
                    return true;
             }
        } catch (error) {
            toast.error("Something went wrong, "+ error.message);
            
        }finally{
            set({placingOrder:false})
        }
    },

    checkOrder:async(session_Id)=>{
        try {
            set({loadingOrder:true})
            const data=await orderConfirmation(session_Id);
          
            set({orderDetails:data.order})
            set({orderAddress:data.order.address});
            set({orderedProducts:data.order.orderItem});
            toast.success(data.message,{ id: "order_success" })
           
            
        } catch (error) {
           toast.error(toast.message+","+ error.message,{ id: "order_error" }); 
        }finally{
            set({loadingOrder:false})
        }
    },

    userOrders:async()=>{
        try {
            set({fetchingUserOrders:true});
            const data=await getUsersOrders();
            
        } catch (error) {
            toast.error(error.message,{ id: "user_orders_error" });
        }finally{
            set({fetchingUserOrders:false})
        }
    }
}))