import Api from "./index.js"

export const getData=async ()=>{
    const res=await Api.get("/data/orders");
    return res.data;
}
