import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';

export const UserPublicRoute = () => {
  const { checkAuth, isAuthenticatedUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthenticatedUser) {
      navigate('/');
    }
  }, [isAuthenticatedUser, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};
