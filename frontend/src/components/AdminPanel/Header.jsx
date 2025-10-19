import { Search, Bell } from 'lucide-react';
import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Shopfront/Spinner';

export const Header = () => {
  const { adminLogout,adminLoggingOut } = useAuth();
  const navigate = useNavigate();

  

  const handleLogout = async () => {

    await adminLogout();
    await navigate('/admin-login');
  
  };

  return adminLoggingOut ? <Spinner/> :(
    <div className="flex ml-64 p-2">
      <header className="w-full h-16 bg-white-800  flex items-center justify-between px-6 shadow-sm">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="absolute top-4 right-4 flex items-center space-x-5">
          <button className="relative">
            <Bell size={22} className="hover:text-blue-800" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div className="relative inline-block group">
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-600 cursor-pointer hover:border-blue-400"
            />

            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200">
              <ul className="text-gray-700">
                <li
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
