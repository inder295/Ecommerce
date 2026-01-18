import { create } from 'zustand';
import { createCategory, getAllCategories } from '../Api/category.api';
import toast from 'react-hot-toast';

export const useCategory = create((set) => ({
  isCategoryFetching: false,
  categories: [],
  sendingRequest: false,

  fetchAllCategories: async () => {
    set({ isCategoryFetching: true });
    try {
      const data = await getAllCategories();
      set({ categories: data.categories });
    } catch (error) {
      console.log('error in fetching categories', error);
    } finally {
      set({ isCategoryFetching: false });
    }
  },

  createCategory: async ({ name, description }) => {
    set({ sendingRequest: true });
    try {
      const data = await createCategory({ name, description });
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error in creating category');
    } finally {
      set({ sendingRequest: false });
    }
  },
}));
