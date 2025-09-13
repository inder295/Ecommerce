import Api from './index';

export const getAllCategories =async()=>{
    const res=await Api.get('/category/getAllCategories')
    return res.data;
}

export const createCategory=async ({name,description})=>{
   const res=await Api.post('/category/create-category',{name,description});  
   return res.data;
}
    
    