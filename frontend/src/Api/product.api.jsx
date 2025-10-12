
import Api from './index';

export const getAllPrducts = async (page) => {
  let url = `/product/get-products?page=${page}&limit=12`;

  
  const res = await Api.get(url);
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
   
   return res.data;
}

export const getProductByCategory=async(categoryId)=>{
   const res=await Api.get(`/product/getProductsByCategory/${categoryId}`);
   await console.log(res.data);
   
   return res.data;
}
