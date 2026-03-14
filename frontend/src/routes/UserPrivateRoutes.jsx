import { useEffect } from 'react';
import { useAuth } from '../store/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../components/Shopfront/Spinner';

export const UserPrivateRoutes = () => {
  const { checkAuth, authUser, isCheckingAuth } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      checkAuth();
    }, 500);
  }, [authUser]);

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
