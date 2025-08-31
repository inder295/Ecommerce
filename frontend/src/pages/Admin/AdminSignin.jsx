import { useEffect, useState } from "react";
import { useAuth } from "../../store/useAuth";
import { useNavigate } from "react-router-dom";

export const AdminSignin= () =>{

  const {signin,isSignIn,authUser} =useAuth();
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const navigate=useNavigate();

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
   
    
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {email,password}=formData;
    console.log(formData);
    
    await signin({email,password});  
    console.log({email,password});
  }

  useEffect(()=>{
     if(authUser){
      navigate("/admin/dashboard")
    }
  },[navigate,authUser])
  
     
      return (
        <> 
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Admin Login
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} class="space-y-6">
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
                placeholder="john@example.com"
                onChange={handleChange}
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
              {isSignIn? "Signing in ..." : "Signin"}
            </button>
          </div>
        </form>

        
      </div>
      </div>
    </>
  );
}