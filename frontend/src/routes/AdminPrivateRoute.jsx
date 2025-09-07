import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';


export const AdminPrivateRoute = ({ children }) => {
  const { checkAuth, authAdmin,isCheckingAuth } = useAuth();
  const navigate = useNavigate();
   
  useEffect(() => {
      checkAuth();
    }, []);

    useEffect(()=>{
      setTimeout(()=>{
        if(!isCheckingAuth && !authAdmin){
        navigate("/admin-login")
        }
      },500)
    },[isCheckingAuth,authAdmin,navigate])

    if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin w-8 h-8 text-blue-500" />
      </div>
    );
  }


   

  return children;
};
  