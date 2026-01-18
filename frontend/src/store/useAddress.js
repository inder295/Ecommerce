import { create } from 'zustand';

import toast from 'react-hot-toast';
import { addAddress, getAddresses } from '../Api/address.api';

export const useAddress = create((set) => ({
  addingAddress: false,
  fetchingAddresses: false,
  address: [],

  addAddress: async (form) => {
    try {
      console.log('add address called', form);

      set({ addingAddress: true });
      const res = await addAddress(form);

      toast.success(res.message);
    } catch (error) {
      toast.error('Error in adding address' + error.message);
    } finally {
      set({ addingAddress: false });
    }
  },
  getAddresses: async () => {
    try {
      set({ fetchingAddresses: true });
      const res = await getAddresses();
      set({ address: res.addresses });
    } catch (error) {
      toast.error('Error in fetching addresses' + error.message);
    } finally {
      set({ fetchingAddresses: false });
    }
  },
}));
