import { create } from "zustand";
import { addRemovewishlist, checkWishlistItem } from "../Api/wishlist.api";
import toast from "react-hot-toast";

export const useWishlist=create(()=>({
    
    async addRemoveInWishlist(productId){
       try {
           const data=await addRemovewishlist(productId);
           toast.success(data.message)
       } catch (error) {
           toast.error(error)
       }

    },

    async checkItemInWishlist(productId){
        try {
            const data=await checkWishlistItem(productId);
           
            
            return data.present; 
           
        } catch (error) {
            console.log(error);
            
        }
    }

    

}))