import React, {  useEffect, useState } from "react";

import { useAnalytics } from "../../store/useAnalytics";
import { Graph } from "../../utils/graph";


export const SalesAnalytics = () => {
  
  const [type, setType] = useState("weekly");
  

  const {getSalesData,fetchingSalesData,salesData}=useAnalytics();

  useEffect(()=>{
    getSalesData(type);
   
    
  },[type])
  
  
  


  if(fetchingSalesData){
    return <div className="h-80 w-full my-11 bg-slate-300 "></div>
  }


  return (
    <div className="w-full max-w-5xl p-4 bg-white rounded my-11 shadow-xl ">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold my-2">Sales Record</h2>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <Graph salesData={salesData}  type={type}/>
     
      <p className="text-center font-bold text-gray">{}</p>
    </div>
  );
};
