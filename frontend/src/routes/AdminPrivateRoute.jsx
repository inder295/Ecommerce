import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';

export const AdminPrivateRoute = ({ children }) => {
  const { checkAuth, authAdmin } = useAuth();
  const navigate = useNavigate();
   
  useEffect(() => {
      checkAuth();
    }, [authAdmin]);

  if (!authAdmin) {
    return navigate('/admin-login');
  }

  return children;
};
  