
import Api from './index';

export const getAllPrducts = async (page) => {
  const res = await Api.get(`/product/get-products?page=${page || 1}&limit=12`);
  return res.data;
};

export const createProduct =async(formData)=>{
   return await Api.post("/product/create-product",formData,{
      headers:{
          "Content-Type":"multipart/form-data"
      },
   })
}

export const getProductById=async (id) =>{
   const res= await Api.get(`/product/${id}`);
   console.log(res.data);
   
   return res.data;
}
