import toast from "react-hot-toast";
import {create} from "zustand";
import { getData, salesData } from "../Api/analytics.api";

export const useAnalytics=create((set)=>({
    
    totalOrder:0,
    pendingOrders:0,
    completedOrders:0,
    canceledOrders:0,
    fetchingOrderData:false,
    fetchingSalesData:false,
    salesData:[],
    
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
    },
    getSalesData:async(type)=>{
        try {
            set({fetchingSalesData:true});
            const data=await salesData(type);
            set({salesData:data.result});
        } catch (error) {
            toast.error(error.message);
        }finally{
            set({fetchingSalesData:false});
        }
    }
}))

