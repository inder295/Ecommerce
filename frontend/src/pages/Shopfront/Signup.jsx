import { useState } from 'react';
import { Loader } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/useAuth';
import Spinner from '../../components/Shopfront/Spinner';

export const Signup = () => {

  const {isSigningUp,signup}=useAuth();

   const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""

  })

  const navigate=useNavigate();


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
    
    
  }

  const submit=async (e)=>{

    e.preventDefault();

    try {
      if(await signup(formData)){
        await navigate("/signin"); 

      }
      
     
     
      
    } catch (error) {
      
      console.log(error);
      
    }

    

  }

  return isSigningUp ? <Spinner /> : (
    <>
      
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Signup Account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submit} class="space-y-6">
            <div>
              <label
                for="Fullname"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Full Name
              </label>
              <div class="mt-2">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autocomplete="text"
                  onChange={handleChange}
                  placeholder="John Doe"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  onChange={handleChange}
                  placeholder="john@example.com"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autocomplete="current-password"
                  placeholder="Enter Your Passowrd"
                  onChange={handleChange}
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isSigningUp? <Loader className='animate-spin'/> : "Sign Up"}
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?
            <Link
              to="/signin"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {' '}
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
