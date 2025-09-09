import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';

export const AdminPublicRoute = ({ children }) => {
  const { authAdmin, checkAuth } = useAuth();
  const location=useLocation();

  useEffect( () => {
    checkAuth();
  }, []);  

   if (authAdmin && location.pathname === ("/admin-login") ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
}
