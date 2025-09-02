import { create } from 'zustand';
import { adminLogin, check, logout, signin, signup } from '../Api/auth.api';
import toast from 'react-hot-toast';

export const useAuth = create((set) => ({
  authUser: null,
  isSignUp: false,
  isSignIn: false,
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
    } catch (error) {
      console.log(error);
      set({ authAdmin: null });
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async ({ name, email, password }) => {
    set({ isSignUp: true });

    try {
      const data = await signup({ name, email, password });
      set({ authUser: data.user });
      toast.success(data.message);
    } catch (error) {
      console.log('error in signup', error);
      toast('Error in signup');
    } finally {
      set({ isSignUp: false });
    }
  },

  signin: async ({ email, password }) => {
    set({ isSignIn: true });
    try {
      const data = await signin({ email, password });
      set({ authUser: data.user });
      toast.success(data.message);
    } catch (error) {
      console.log('error in signin', error);
      toast.error('Error in signing in');
    } finally {
      set({ isSignIn: false });
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
      console.log(error);
      toast.error('Error in logout');
    }
  },
}));
