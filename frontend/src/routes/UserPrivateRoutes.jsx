import { useEffect } from "react";
import { useAuth } from "../store/useAuth"
import { useNavigate } from "react-router-dom";


export const UserPrivateRoutes=({children})=>{

   const {checkAuth,authUser}=useAuth(); 
   const navigate=useNavigate();

   useEffect(()=>{
     checkAuth();
        if(!authUser){
            navigate(-1);
        }
   },[])

   return <>{children}</>

}
