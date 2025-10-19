import { useState } from "react";

export const PdpAttributes =  ({attributes}) => {

  const [selectedVal,setSelectedVal]=useState({});


    if(!attributes){
        return null;
    }

    function handleSelect(key,val){
        setSelectedVal((prev)=>({
          ...prev,
          [key]:val
        }))
    }

     
    let attribute=Object.entries(attributes);
     
    
  return (
    <div className='text-xl font-semibold '>
       
        {
            attribute.map(([key,value],index)=>(
                <div key={index}>
                <div className="m-2">{key[0].toUpperCase() + key.slice(1)}</div>
                <div className="flex ">
                {value.map((val) => (
              <button onClick={()=>handleSelect(key,val)} className={` m-2 dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 cursor-pointer ${selectedVal[key]==val ? 'bg-gray-300' : ''}`} key={val}>
                {val}
              </button>
            ))}
            </div>
            </div>
         ))
        }
    </div>
  )
}


