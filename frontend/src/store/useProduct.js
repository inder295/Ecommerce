import { create } from "zustand";
import { getAllPrducts,createProduct } from "../Api/product.api";

export const useProduct = create((set)=>({

    isProductFetching:false,
    products:[],
    isproductCreating:false,

    async fetchAllProducts(){
        set({isProductFetching:true})
        try {
            const data=await getAllPrducts();
            set({products:data.products})
        } catch (error) {
            console.log(error);
            
        }finally{
            set({isProductFetching:false})
        }
    },

    async createProduct(formData){
        set({isproductCreating:true});
        try {
            const data=await createProduct(formData);
            return data;
        } catch (error) {
            console.log(error);
            
        } finally{
            set({isproductCreating:false});
        }
    }

    



}))