import { create } from "zustand";
import { getAllPrducts,createProduct, getProductById, getProductByCategory } from "../Api/product.api";

export const useProduct = create((set)=>({

    isProductFetching:false,
    products:[],
    isproductCreating:false,
    isPdpFetching:false,
    productDetails:{},
    pagination:{},
    isProductsByCategoryFetching:false,

    async fetchAllProducts(page=1,categoryId){
        set({isProductFetching:true})
        try {
            const data=await getAllPrducts(page,categoryId);
            
            
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
            
             set({productDetails:data.product})


        } catch (error) {
            console.log(error);
            
        }finally{
            set({
                 isPdpFetching:false
            })
        }
    },

    async fetchProductsByCategory(categoryId){
        console.log(categoryId);
        
        set({isProductsByCategoryFetching:true})
        try {
            const data=await getProductByCategory(categoryId);

            set({products:data.products})
            
            


        } catch (error) {
            console.log(error);
            
        }finally{
          set({isProductsByCategoryFetching:false})
        }
    }

    

    

    



}))