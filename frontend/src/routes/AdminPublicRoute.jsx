import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';

export const AdminPublicRoute = ({ children }) => {
 const { checkAdminAuth, authAdmin } = useAuth();
  const location=useLocation();
  const navigate=useNavigate();

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await checkAdminAuth();
      if (mounted && !useAuth.getState().authAdmin) {
        navigate('/admin-login');
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, [checkAdminAuth, navigate]);

   if (authAdmin && location.pathname === ("/admin-login") ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
}
