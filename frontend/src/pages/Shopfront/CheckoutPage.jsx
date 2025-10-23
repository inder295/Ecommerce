import { useEffect, useState } from 'react';
import AddressForm from '../../components/Shopfront/Address';
import PaymentMethod from '../../components/Shopfront/PaymentMethod';
import Shipment from '../../components/Shopfront/Shipment';
import { Header } from '../../components/Shopfront/Header';
import { useAddress } from '../../store/useAddress';
import Spinner from '../../components/Shopfront/Spinner';

export default function CheckoutPage() {
  //const [address, setAddress] = useState({});
  const [payment, setPayment] = useState('stripe');
  const [shipment, setShipment] = useState('standard');

  const {fetchingAddresses,address,getAddresses,addAddress}=useAddress();

  useEffect(()=>{
    getAddresses();
  },[addAddress])

  return fetchingAddresses ? <Spinner/> : (
    <div className=" bg-gray-50 p-6 flex justify-center">
      <Header/>
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 space-y-6 mt-20">
        <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
      
      
        <AddressForm  />
       
        {
          address.map((a)=>(
              <label key={a.id}>
                  <div className='box-content rounded-2xl border p-2 my-5  cursor-pointer'>
                    <div className='text-gray-600 p-2 flex justify-between'>
                      
                      <div>
                          <p>{a.fullname}</p>
                          <p>{a.email}</p>
                          <p>{a.phone}</p>
                          <p>{a.address}</p>
                          <p>{a.city}</p>
                          <p>{a.state}</p>
                          <p>{a.country}</p>
                          <p>{a.zip}</p>
                      </div>
                      <div className=''>
                              <input id="default-radio-1" type="radio" value={a.id} name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
    
                        </div>
                    </div>
                  </div>
                
              </label>

          ))

        }

        <PaymentMethod value={payment} onChange={setPayment} />
        <Shipment value={shipment} onChange={setShipment} />

        <div className="flex justify-end">
          <button
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
