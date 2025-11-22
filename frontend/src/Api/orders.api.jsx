import Api from "./index"

export const placeOrder=async(formData)=>{
    const res=await Api.post("/order/place-order",formData);
    return res.data;
}

export const orderConfirmation=async(session_id)=>{
    const res=await Api.get(`/order/order-confirmation/${session_id}`);
    return res.data;
}