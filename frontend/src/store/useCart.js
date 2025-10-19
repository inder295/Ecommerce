import toast from 'react-hot-toast';
import {create} from 'zustand';


export const useCart=create((set)=>({
    
    addingInCart:false,

    
    addToCart:async(productId,quantity)=>{
        try {
            set({addingInCart:true})
            
        } catch (error) {
            toast.error("Error in adding to cart",error)
        }
    },
}))