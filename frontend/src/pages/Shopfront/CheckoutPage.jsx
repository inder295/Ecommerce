import { useEffect, useState } from 'react';
import AddressForm from '../../components/Shopfront/Address';
import { Header } from '../../components/Shopfront/Header';
import { useAddress } from '../../store/useAddress';
import Spinner from '../../components/Shopfront/Spinner';
import { useOrders } from '../../store/useOrder';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {

  const {placingOrder,placeOrder}=useOrders();
  const navigate=useNavigate();

  const [formData,setFormData]=useState({
    addressId:"",
    paymentMethod:"",
    shipmentMehod:""
  })

   async function handleInput(e){
     const updated={...formData,[e.target.name]:[e.target.value]};
     await setFormData(updated)   
  }

  async function handleSubmit(){
   
    
    const success= await placeOrder(formData);

    if(await success.url){
      
      // window.location.href=success.url;
      await navigate(success.url)
      
      //await navigate(success.url)
    }else{
      await navigate('/cart/checkout/order-success');

    }
  }
  

  const {fetchingAddresses,address,getAddresses,addAddress}=useAddress();

  useEffect(()=>{
    getAddresses();
  },[addAddress])

  return (fetchingAddresses|| placingOrder ) ? <Spinner/> : (
    <div className=" bg-gray-50 p-6 flex justify-center">
      <Header/>
      <div onSubmit={handleSubmit} className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 space-y-6 mt-20">
        <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
      
      
        <AddressForm  />
       
        {
          address.map((a)=>(
              <label key={a.id} onClick={handleInput}>
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
                              <input id="default-radio-1" type="radio" value={a.id} name="addressId" 
                             
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
    
                        </div>
                    </div>
                  </div>
                
              </label>

          ))

        }
      
      
    <div className="p-4 border rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer" onClick={handleInput}>
          <input
            type="radio"
            name="paymentMethod"
            value="STRIPE"
            
          />
          Pay with Stripe
        </label>

        <label className="flex items-center gap-2 cursor-pointer" onClick={handleInput}>
          <input
            type="radio"
            name="paymentMethod"
            value="COD"
           
          />
          Cash on Delivery
        </label>
      </div>
        </div>


    <div className="p-4 border rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Shipment</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="shipmentMehod"
            value="FREE"
            onChange={handleInput}
          />
          FREE (6-8 days)
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="shipmentMehod"
            value="express"
            onChange={handleInput}
          />
          Express (1-2 days)
        </label>
      </div>
    </div>

        <div className="flex justify-end ">
          <button onClick={handleSubmit}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
