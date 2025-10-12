import { create } from 'zustand';
import { adminLogin, check, logout, signin, signup } from '../Api/auth.api';
import toast from 'react-hot-toast';


export const useAuth = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isSigningIn: false,
  isAdminSignin: false,
  isCheckingAuth: false,
  authAdmin: null,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const data = await check();

      if (data.user.role === 'ADMIN') {
        set({ authAdmin: data.user });
      } else {
        set({ authUser: data.user });
      }

      return data.authenticated;
    } catch (error) {
       console.log(error);
      set({ authAdmin: null });
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const data = await signup(formData);
      toast.success(data.message);
      return true;
    } catch (error) {
      console.log(error);
      
      toast.error("Error in Signup",error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  signin: async (formData) => {
    set({ isSigningIn: true });
    try {
      const data = await signin(formData);
      await set({ authUser: data.user })
     
      await toast.success(data.message);

      return true;
      
    } catch (error) {
      console.log(error);
      toast.error('Please Enter Valid Email or Password !');
    } finally {
      set({ isSigningIn: false });
    }
  },

  adminSignin: async ({ email, password }) => {
    set({ isAdminSignin: true });
    try {
      const data = await adminLogin({ email, password });

      set({ authAdmin: data.user });
      toast.success(data.message);
    } catch (error) {
      console.log('Error in admin login', error);
      set({ authAdmin: null });
      toast.error('You are not Admin');
    } finally {
      set({ isAdminSignin: false });
    }
  },

  logout: async () => {
    try {
      const data = await logout();
      set({ authUser: null });
      toast.success(data.message);
    } catch (error) {

      toast.error('Error in logout',error);
    }
  },
}));
