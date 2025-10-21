import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';

export const AdminPublicRoute = ({ children }) => {
 const { checkAdminAuth, authAdmin,checkingAdmin } = useAuth();
  const location=useLocation();
  const navigate=useNavigate();

  useEffect( () => {
    checkAdminAuth();
  }, []); 
  
  useEffect(()=>{
      setTimeout(()=>{
        if(!checkingAdmin && !authAdmin){
          navigate("/admin-login")
        }
      },10)
    },[])

   if (authAdmin && location.pathname === ("/admin-login") ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
}
