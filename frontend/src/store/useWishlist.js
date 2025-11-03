import { create } from "zustand";
import { addRemovewishlist, checkWishlistItem, getAllWishlistItems } from "../Api/wishlist.api";
import toast from "react-hot-toast";

export const useWishlist=create((set)=>({
   
    wishlistItems:[],
    fetchWishlist:false,
    
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
    },

    async getAllWishlistItems(){
        try {
            set({fetchWishlist:true})
            const data=await getAllWishlistItems();
            set({wishlistItems:data.items})
            
        } catch (error) {
            console.log(error);
            
        }finally{
            set({fetchWishlist:false})
        }
    }

    

}))