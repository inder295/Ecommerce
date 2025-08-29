import { useState } from 'react';
import AddressForm from '../components/Shopfront/Address';
import PaymentMethod from '../components/Shopfront/PaymentMethod';
import Shipment from '../components/Shopfront/Shipment';

export default function CheckoutPage() {
  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState('stripe');
  const [shipment, setShipment] = useState('standard');

  const handleSubmit = () => {
    console.log('Checkout Data:', { address, payment, shipment });
    alert('Order Placed Successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>

        <AddressForm onChange={setAddress} />
        <PaymentMethod value={payment} onChange={setPayment} />
        <Shipment value={shipment} onChange={setShipment} />

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
