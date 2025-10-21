import Api from "./index"


export const addToCart=async({productId,quantity})=>{
    const res=await Api.put('/cart/add-to-cart',{productId,quantity})
    return res.data;
}

export const cartTotalCount=async()=>{
    const res=await Api.get('/cart/get-cart-items-by-count');
    return res.data;
}