import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../store/useAuth';

export const AdminSignin = () => {

   const { adminSignin, authAdmin, isAdminSignin } = useAuth();
  const [formData, setFormData] = useState({
    email: 'admin@example.com',
    password: 'admin123',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('button clicked');

    const { email, password } = formData;
    await adminSignin({ email, password });
    

    if (authAdmin) {
      navigate('admin/dashboard');
    }
  };


  return (
    <>
      <div class="flex h-screen w-screen flex-col justify-center px-6 py-10 lg:px-8 bg-gradient-to-bl from-blue-100 via-white to-pink-400 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Admin Login
          </h2>
        </div>

        <div class="my-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}>
            <div className='my-3'>
              <label
                htmlFor="email"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                onChange={handleChange}
                placeholder="john@example.com"
                class="my-4 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                onChange={handleChange}
                placeholder="Enter Your Password"
                class="my-4 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <button
              type="submit"
              class="my-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isAdminSignin ? <Loader class="animate-spin" /> : 'Signin'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
 
};
