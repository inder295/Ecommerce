
import { useEffect } from 'react';
import { useProduct } from '../../store/useProduct';
import { AllProducts } from './AllProducts';
import { Filters } from './Filters';

export const PlpMainSection = () => {
  
  const {products,fetchAllProducts,isProductFetching}=useProduct();

  useEffect(()=>{
   fetchAllProducts();
   
  },[])


  
  
  return  <>  
  
    {
      
      isProductFetching ? <div>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
        </div>
      </div> : null
    }
   
        <div className="flex justify-center items-start flex-col gap-20 md:flex-row  py-0 sm:w-full px-5 m-0 ">
        <Filters products={products}/>
        <AllProducts products={products} />
      </div>     
    </>
 
};
