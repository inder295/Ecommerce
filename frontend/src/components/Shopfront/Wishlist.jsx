import { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { useWishlist } from '../../store/useWishlist';
import {  useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../store/useAuth';


export const Wishlist = () => {

    const [like,setLike]=useState(false);
    const [load,setLoad]=useState(false);

    const {addRemoveInWishlist,checkItemInWishlist}=useWishlist();
    const {authUser}=useAuth();
    
    const productId=useParams();
    const navigate=useNavigate();
    
    
    const handleWishlist=async()=>{

       if(!await authUser){
         await navigate('/signin')
         return 
       }
               
        setLoad(true)
        setLike(!like)
        setTimeout(()=>{
           setLoad(false)
        },200)

        await addRemoveInWishlist(productId)
        await check()
        
        
    }

    const check=async ()=>{
           const result =await checkItemInWishlist(productId);
           await setLike(result);
    }

    useEffect( ()=>{
        
        check();
          
    },[productId] )


    
  return ( 
        <button
        type='button'
        onClick={handleWishlist}
        className={`focus:outline-none transition-transform duration-200 ${load ? "scale-110":"scale-100"}`}
        >
        <FaHeart
            className={`text-4xl rounded-full size-12 p-2 hover:shadow-lg border-2   ${
            like ? " transition-colors duration-300 ease-in-out text-red-600" : "text-gray-200 shadow-sm "
            }`}
        />
    </button>

    
  )
}

