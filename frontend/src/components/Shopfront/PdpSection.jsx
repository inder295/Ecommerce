import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useProduct } from '../../store/useProduct';
import { PdpImageCorosel } from './PdpImageCorosel';
import { PdpAttributes } from './pdpAttributes';



export const PdpSection = () => {
  

  const {id}=useParams();
  

  const {fetchProductById,isPdpFetching,productDetails}=useProduct();

  useEffect(()=>{
    fetchProductById(id)
  },[])



  return <>
  <div className='mt-2 w-[80%] m-auto flex justify-center'>
    
    {
    isPdpFetching ? (
      <div className='flex justify-center align-center'>Loading...</div>
    ):(
      
      <div className='grid grid-cols-2 pt-0 mx-auto'>
        {/* image */}
        <div className='col-span-1 w-full'>
          <PdpImageCorosel image={productDetails.image} />
        </div>
        {/* name */}
          <div className='col-span-1 font-bold text-wrap mx-10'>
             <div className='text-3xl'> {productDetails.name}</div>
             
              <div className=' text-3xl mt-5'>${productDetails.price}</div>
              <PdpAttributes attributes={productDetails.attributes} />
            <button
              type="button"
              class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >Add To Cart</button>
          </div>
          
      </div>
    )
    }

    </div>
    
    <div className='w-[80%] mx-auto'>
      <hr class=" h-px bg-gray-300 border-0 shadow-md dark:bg-gray-700"  />
      <div className=''>
        <div className='m-2 text-lg font-bold '>Description</div>
        <p className='m-2 text-wrap'>{productDetails.description}</p>
      </div>
      
    </div>

  </>
};
