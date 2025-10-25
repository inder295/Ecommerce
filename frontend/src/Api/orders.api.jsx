import Api from "./index"

export const placeOrder=async(formData)=>{
    const res=await Api.post("/order/place-order",formData);
    return res.data;
}