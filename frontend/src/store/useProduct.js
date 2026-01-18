import { create } from 'zustand';
import {
  getAllPrducts,
  createProduct,
  getProductById,
  getProductByCategory,
  searchProducts,
} from '../Api/product.api';
import toast from 'react-hot-toast';

export const useProduct = create((set) => ({
  isProductFetching: false,
  products: [],
  isproductCreating: false,
  isPdpFetching: false,
  productDetails: {},
  pagination: {},
  categoryProductFetching: false,

  async fetchAllProducts(page = 1) {
    set({ isProductFetching: true });
    try {
      const data = await getAllPrducts(page);

      set({ products: data.products });

      set({ pagination: data.pagination });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isProductFetching: false });
    }
  },

  async createProduct(formData) {
    let data;
    set({ isproductCreating: true });
    try {
      data = await createProduct(formData);
      return data;
    } catch (error) {
      toast.error(error);
    } finally {
      set({ isproductCreating: false });
    }
  },

  async fetchProductById(id) {
    set({ isPdpFetching: true });
    try {
      const data = await getProductById(id);

      set({ productDetails: data.product });
    } catch (error) {
      console.log(error);
    } finally {
      set({
        isPdpFetching: false,
      });
    }
  },

  async fetchProductsByCategory(categoryId) {
    set({ categoryProductFetching: true });
    try {
      const data = await getProductByCategory(categoryId);

      if (await data.products) {
        set({ products: data.products });
      }
    } catch (error) {
      console.log(error);
    } finally {
      set({ categoryProductFetching: false });
    }
  },

  async searchProduct(search) {
    try {
      set({ isProductFetching: true });
      const data = await searchProducts(search);
      if ((await data.products.length) > 0) {
        set({ products: data.products });
      }
    } catch (error) {
      console.log(error);
    } finally {
      set({ isProductFetching: false });
    }
  },
}));
