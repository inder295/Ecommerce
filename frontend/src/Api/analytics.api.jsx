import Api from "./index.js"

export const getData=async ()=>{
    const res=await Api.get("/data/orders");
    return res.data;
}

export const salesData=async(type)=>{
    const res=await Api.get('/data/sales?type='+type);
    return res.data;
}
