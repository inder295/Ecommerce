import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';

export const AdminPrivateRoute = ({ children }) => {
  const { checkAdminAuth, checkingAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await checkAdminAuth();
      // after check completes, if no admin, navigate
      if (mounted && !useAuth.getState().authAdmin) {
        navigate('/admin-login');
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, [checkAdminAuth, navigate]);

  if (checkingAdmin) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin w-8 h-8 text-blue-500" />
      </div>
    );
  }

  return children;
};
