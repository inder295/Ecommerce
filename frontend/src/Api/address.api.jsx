import Api from './index';

export const addAddress=async(form)=>{
 
    const res=await Api.post('address/add-address',form,{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
          
        },
        body: JSON.stringify(form),
    })

    return res.data;
}

export const getAddresses=async()=>{
    const res=await Api.get('address/get-all-addresses');
    return res.data; 
} 