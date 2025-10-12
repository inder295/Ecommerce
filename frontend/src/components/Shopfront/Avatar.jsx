import { useAuth } from '../../store/useAuth'
import { Link } from 'react-router-dom';


export const Avatar = () => {
  
    const {logout,authUser}=useAuth();

    async function handleLogout(){
         await logout();
    }
  return (
    <>
    {!authUser ? <Link to="/signin" className=""> 
       <button type="button" class="text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign In</button>

     </Link> : (
       <div className="relative inline-block group z-[9999]">
        <img
          className="w-8 h-8 rounded-full hover:ring-2 hover:ring-blue-400 cursor-pointer"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="user photo"
        />

        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-[9999]">
          <ul className="text-gray-700">
            <li
              // onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
            >
              Profile
            </li>
            <li
              // onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Wishlist
            </li>

            <li
              // onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Orders
            </li>
            
            <li
               onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>

      )}

    </>
  )
}

