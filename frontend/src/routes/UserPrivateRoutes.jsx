import { useState } from "react";
import { useAuth } from "../store/useAuth"
import { Outlet, useNavigate } from "react-router-dom";





export const UserPrivateRoutes=()=>{

    const {checkAuth,authUser}=useAuth();
    const navigate=useNavigate();

    useState(()=>{
      checkAuth();
    },[])

    if(!authUser){
      return navigate('signin');
    }


   return <>
   <Outlet/>
   </>

}
