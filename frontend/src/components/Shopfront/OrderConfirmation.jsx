import { Link, useNavigate } from 'react-router-dom';
import { useOrders } from '../../store/useOrder';
import { useEffect } from 'react';
import Spinner from './Spinner';

export default function OrderConfirmation() {
  const { orderDetails, orderAddress, checkOrder, loadingOrder } = useOrders();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const session_id = searchParams.get('session_id');

  useEffect(() => {
    if (!session_id) {
      return;
    }

    checkOrder(session_id);
  }, [session_id, navigate]);

  if (loadingOrder) {
    return <Spinner />;
  }

  if (!orderDetails || !orderAddress) {
    return (
      <div className="min-h-screen flex justify-center bg-gray-50 py-10 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-red-600 text-center mb-4">
            ⚠️ Order Not Found
          </h2>
          <p className="text-center text-gray-600 mb-6">
            We couldn't find your order details. Please contact support.
          </p>
          <div className="mt-6 text-center">
            <Link
              to="/product-list"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 py-10 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
          🎉 Order Confirmed!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Thank you for your purchase,{' '}
          <span className="font-medium">
            {orderDetails?.user?.name || 'Customer'}
          </span>
          . Your order has been placed successfully.
        </p>

        {/* Order Details */}
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Shipping Address</h3>
            <p className="text-gray-700">{orderAddress?.fullname}</p>
            <p className="text-gray-700">{orderAddress?.state}</p>
            <p className="text-gray-700">{orderAddress?.address}</p>
            <p className="text-gray-700">📞 {orderAddress?.phone}</p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
            <p className="text-gray-700 capitalize">
              {orderDetails?.paymentMethod}
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Shipment</h3>
            <p className="text-gray-700 capitalize">
              {orderDetails?.shipmentMehod}
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            to="/product-list"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
