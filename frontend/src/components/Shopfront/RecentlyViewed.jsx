import React, { useEffect } from 'react'
import { useProduct } from '../../store/useProduct';

const RecentlyViewed = () => {

    const {recentViewedProducts,recentlyViewed}=useProduct();


    useEffect(()=>{
        recentViewedProducts();
    },[])
  return (
    <pre>
      {JSON.stringify(recentlyViewed, null, 2)}
    </pre>
  )
}

export default RecentlyViewed;
