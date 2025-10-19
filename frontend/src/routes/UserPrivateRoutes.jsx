import { useEffect } from "react";
import { useAuth } from "../store/useAuth"
import { useNavigate } from "react-router-dom";


export const UserPrivateRoutes=({children})=>{

   const {checkAuth,isAuthenticatedUser}=useAuth(); 
   const navigate=useNavigate();

   useEffect(()=>{
     checkAuth();
        if(!isAuthenticatedUser){
            navigate("/signin");
        }
   },[])

   return <>{children}</>

}
