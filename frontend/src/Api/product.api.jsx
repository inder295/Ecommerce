
import Api from './index';

export const getAllPrducts = async () => {
  const res = await Api.get('/product/get-products');
  return res.data;
};

export const createProduct =(formData)=>{
   return Api.post("/product/create-product",formData,{
      headers:{
          "Content-Type":"multipart/form-data"
      },
   })
}
