import toast from 'react-hot-toast';
import {create} from 'zustand';
import { addToCart, cartTotalCount } from '../Api/cart.api';



export const useCart=create((set)=>({
    
    addingInCart:false,
    cartCount:0,

    
    addToCart:async({productId,quantity})=>{
        try {
            set({addingInCart:true})
            const data=await addToCart({productId,quantity});
            toast.success(data.message)
        } catch (error) {
            toast.error("Error in adding to cart",error)
        }finally{
            set({addingInCart:false})
        }
    },
    cartTotalCount:async()=>{
        try {
            const data=await cartTotalCount();
            set({cartCount:data.count})
        } catch (error) {
            toast.error("Error in fetching cart count",error)
        }
    }
}))