import { create } from "zustand";
import { getAdminOrderById, getAllOrders, getOrderById, getUsersOrders, orderConfirmation, placeOrder } from "../Api/orders.api";
import toast from "react-hot-toast";


export const useOrders=create((set)=>({
    placingOrder:false,
    loadingOrder:false,
    orderDetails:null,
    orderAddress:null,
    orderedProducts:null,
    fetchingUserOrders:false,
    userOrdersDetails:[],
    order:null,
    fetchingOrderDatilsById:false,
    fetchingAdminOrders:false,
    adminOrdersList:[],
    fetchingAdminOrderById:false,
    adminOrderDetailsById:null,

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
            set({userOrdersDetails:data.orders});
            
        } catch (error) {
            toast.error(error.message,{ id: "user_orders_error" });
        }finally{
            set({fetchingUserOrders:false})
        }
    },

    orderDetailsById:async(orderId)=>{
        try {
           
            set({fetchingOrderDatilsById:true})
            const data=await getOrderById(orderId);
           
            set({order:data.order});

        } catch (error) {
            toast.error(error.message,{ id: "user_order_by_id_error" });
        }finally{
            set({fetchingOrderDatilsById:false})
        }
    },

    adminOrders:async()=>{
        try {
            set({fetchingAdminOrders:true});
            const data=await getAllOrders();
            set({adminOrdersList:data.orders})
        } catch (error) {
            toast.error(error.message);

        }finally{
            set({fetchingAdminOrders:false})
        }

    },

    getOrderByIdForAdmin:async(orderId)=>{
       try {
         set({fetchingAdminOrderById:true})
         const data=await getAdminOrderById(orderId);
         set({adminOrderDetailsById:data.order})
       } catch (error) {
         toast.error(error.message)
       }finally{
         set({fetchingAdminOrderById:false})
       }
    }

}))