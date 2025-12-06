import toast from "react-hot-toast";
import {create} from "zustand";
import { getData } from "../Api/analytics.api";

export const useAnalytics=create((set)=>({
    
    totalOrder:0,
    pendingOrders:0,
    completedOrders:0,
    canceledOrders:0,
    fetchingOrderData:false,

    getOrderData:async ()=>{
        try {
            set({fetchingOrderData:true})
            const data=await getData();
            set({totalOrder:data.totalOrders})
            set({pendingOrders:data.pendingOrders})
            set({completedOrders:data.completedOrders})
            set({canceledOrders:data.canceledOrder})

        } catch (error) {
            toast.error(error.message)
        } finally{
            set({fetchingOrderData:false})
        }
    }
}))

