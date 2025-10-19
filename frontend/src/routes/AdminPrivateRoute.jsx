import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';


export const AdminPrivateRoute = ({ children }) => {
  const { checkAdminAuth, authAdmin,checkingAdmin } = useAuth();
  const navigate = useNavigate();
   
  useEffect(() => {
      checkAdminAuth();
    }, []);

    useEffect(()=>{
      setTimeout(()=>{
        if(!checkingAdmin && !authAdmin){
          navigate("/admin-login")
        }
      },10)
    },[authAdmin])

    if (checkingAdmin) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin w-8 h-8 text-blue-500" />
      </div>
    );
  }


   

  return children;
};
  