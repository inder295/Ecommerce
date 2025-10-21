import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";


export const UserPublicRoute = () => {

    const {checkAuth,isAuthenticatedUser}=useAuth(); 
   const navigate=useNavigate();

   useEffect(()=>{
      let mounted = true;
      const run = async ()=>{
        await checkAuth();
        if(mounted){
          if(isAuthenticatedUser){
            navigate('/');
          }
        }
      }
      run();
      return ()=>{ mounted=false }
   },[checkAuth,isAuthenticatedUser,navigate])
 
   return <>
      <Outlet/>
    </>
  
}

