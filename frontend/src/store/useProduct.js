import { create } from "zustand";
import { getAllPrducts,createProduct, getProductById } from "../Api/product.api";

export const useProduct = create((set)=>({

    isProductFetching:false,
    products:[],
    isproductCreating:false,
    isPdpFetching:false,
    productDetails:{},
    pagination:{},

    async fetchAllProducts(page){
        set({isProductFetching:true})
        try {
            const data=await getAllPrducts(page);
            
            
            set({products:data.products})
            set({pagination:data.pagination})
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
    },

    async fetchProductById(id){
        set({isPdpFetching:true});
        try {
            const data=await getProductById(id);
            console.log('data =',data);
            
            set({productDetails:data.product})


        } catch (error) {
            console.log(error);
            
        }finally{
            set({
                 isPdpFetching:false
            })
        }
    }

    

    



}))