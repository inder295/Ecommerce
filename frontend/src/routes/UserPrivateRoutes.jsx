import { useState } from "react";
import { useAuth } from "../store/useAuth"
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../components/Shopfront/Spinner";

export const UserPrivateRoutes=()=>{

    const {checkAuth,authUser,isCheckingAuth}=useAuth();
    const navigate=useNavigate();

    useState(()=>{

      setTimeout(()=>{
        checkAuth();

      },500)
    },[authUser])

    

    if(!authUser){

      if(isCheckingAuth){
        return <Spinner/>
      }
      return navigate('signin');
    }
 

   return <>
     <Outlet/>
   </>

}
