import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";


export const UserPublicRoute = ({children}) => {

    const {checkAuth,isAuthenticatedUser}=useAuth(); 
   const navigate=useNavigate();

   useEffect(()=>{
      checkAuth();
      if(isAuthenticatedUser){
            navigate(-1);
      }else{
        navigate("/signin");
      }
   },[])
 
   return <>
      {children}
    </>
  
}

