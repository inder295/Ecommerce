import { useEffect } from 'react';
import { useAuth } from '../store/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../components/Shopfront/Spinner';

export const UserPrivateRoutes = () => {
  const { checkAuth, authUser, isCheckingAuth } = useAuth();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!authUser) {
    if (isCheckingAuth) {
      return <Spinner />;
    }
    return <Navigate to="/signin" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
