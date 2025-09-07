import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';

export const AdminPublicRoute = ({ children }) => {
  const { authAdmin, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);
  

   if (authAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
}
