
import { useEffect, useState } from 'react';
import { useProduct } from '../../store/useProduct';
import { AllProducts } from './AllProducts';
import { Filters } from './Filters';
import {Pagination} from "@mui/material"
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

export const PlpMainSection = () => {
  
  const {products,fetchAllProducts,isProductFetching,pagination,fetchProductsByCategory}=useProduct();
  const [page,setPage]=useState(1);
  
  const id=useParams();

  
  
  useEffect(()=>{
     
    if(id.categoryId){
       fetchProductsByCategory(id.categoryId)
    }else{
      fetchAllProducts(page);

    }

  
   
  },[page,id])
  
  
  return isProductFetching ? <Spinner/> : <>  
  
   
         
       <div className='w-80% mx-auto'>
           <p className='flex justify-end m-3 mx-20 font-semibold'>{pagination.totalProducts} products</p>
            <div className="flex justify-center items-start flex-col gap-20 md:flex-row  py-0 sm:w-full px-5 m-0 ">
            <Filters products={products}/>
            <AllProducts products={products} />
          </div>  
          <div className='flex justify-end m-10 mx-25'>
            <Pagination count={pagination.totalPages} color="primary" onChange={(e,value)=>setPage(()=>value)} />
        
          </div>  
    </div> 
    </>
 
};
