import Spinner from '../Shopfront/Spinner'
import { useState } from 'react';
import { useAddress } from '../../store/useAddress';

export default function Address({ onChange }) {
  
  const {addAddress,addingAddress,fetchingAddresses,getAddresses}=useAddress();
  
  
  const [form, setForm] = useState({
    fullname: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country:'',
    email:'',
    zip: '',
  });


  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    onChange(updated);
  };

  async function handleSubmit(e){
    e.preventDefault();   
    await addAddress(form);
    await getAddresses();
    setForm({
      fullname: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country:'',
      email:'',
      zip: '',
    })
  }

  return (addingAddress || fetchingAddresses)  ? <Spinner/> : (
    <div className="p-4 border rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 rounded"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 rounded"
        />
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
          className="border p-2 rounded"
        />
        <input
          name="state"
          value={form.state}
          onChange={handleChange}
          placeholder="State"
          className="border p-2 rounded"
        />
        <input
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="country"
          className="border p-2 rounded"
        />
        <input
          name="zip"
          value={form.zip}
          onChange={handleChange}
          placeholder="Pincode"
          className="border p-2 rounded"
        />
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 rounded col-span-2"
        />

        <div className="flex justify-end col-span-2">
          <button
            type='submit'
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Address
          </button>
        </div>
      </form>
    </div>
  );
}
