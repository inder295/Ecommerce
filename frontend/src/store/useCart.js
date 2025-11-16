import toast from 'react-hot-toast';
import {create} from 'zustand';
import { addToCart, cartSummaryApi, cartTotalCount, getCartItems } from '../Api/cart.api';


export const useCart=create((set)=>({
    
    addingInCart:false,
    cartCount:0,
    summary:null,
    fetchingSummary:false,
    fetchingCartItems:false,
    cartItems:[],
    
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
            console.log(error);
            
        }
    },
    cartSummary:async()=>{
        try {
            console.log("carty summary called");
            
            set({fetchingSummary:true})
            const data=await cartSummaryApi();
            
            
            set({summary:data.cartSummary});
            

        } catch (error) {
            //toast.error("Error in fetching cart summary",error)
            console.log(error);
            
        } finally{
            set({fetchingSummary:false})
        }

    },
        getCartItems:async()=>{

            try {
                set({fetchingCartItems:true});
                const data=await getCartItems();
                set({cartItems:data.cartItems});

            } catch (error) {
                //toast.error("Error in fetching cart items",error)
                console.log(error);
                
            } finally {
                set({fetchingCartItems:false})
            }

        }
}))