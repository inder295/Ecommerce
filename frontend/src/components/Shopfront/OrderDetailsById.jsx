import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../../store/useOrder';
import Spinner from './Spinner';

export const OrderDetailsById = () => {
  const { orderId } = useParams();
  const { fetchingOrderDatilsById, order, orderDetailsById } = useOrders();

  useEffect(() => {
    if (orderId) {
      orderDetailsById(orderId);
    }
  }, [orderId, orderDetailsById]);

  // Show loading state
  if (fetchingOrderDatilsById) {
    return <Spinner />;
  }

  // Show error state if order not found
  if (!order) {
    return (
      <div className="max-w-[1920px] w-auto mx-auto py-12">
        <h1 className="text-3xl font-bold text-center text-red-600">
          Order Not Found
        </h1>
        <p className="text-center text-gray-600 mt-4">
          We couldn't find the order details. Please try again.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-[1920px] w-auto mx-auto">
        <h1 className="text-3xl font-bold text-center">Order Details</h1>

        <div className="grid grid-cols-4 gap-4 p-12 max-w-screen-xl mx-auto">
          <div className="bg-slate-100 col-span-3 p-4 rounded-lg">
            <h2 className="text-xl font-bold">Ordered Items</h2>

            {order?.orderItem && order.orderItem.length > 0 ? (
              order.orderItem.map((item, index) => (
                <div key={index} className="flex py-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 object-cover"
                  />
                  <div className="mx-3">
                    <p className="font-semibold">{item.name}</p>
                    <p>${item.price}</p>
                    <p>Quantity : {item.quantity}</p>
                    <p>TotalPrice: ${item.totalPrice}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items found for this order.</p>
            )}
          </div>
          <div className="bg-slate-100 rounded-md p-4">
            <p className="text-xl font-bold ">Address</p>
            <div className="my-4">
              <p>{order?.address?.fullname}</p>
              <p>{order?.address?.email}</p>
              <p>{order?.address?.phone}</p>
              <p>{order?.address?.address}</p>
              <p>{order?.address?.city}</p>
              <p>{order?.address?.state}</p>
              <p>{order?.address?.country}</p>
              <p>{order?.address?.zip}</p>
            </div>

            <div className="">
              <h2 className="text-xl font-bold my-4">Payment Details</h2>
              <p className="">Payment Method : {order?.paymentMethod}</p>
              <p className="">Payment Status : {order?.paymentStatus}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold my-4">Shipping Details</h2>
              <p>Shipping Method : {order?.shipmentMehod}</p>
            </div>
          </div>
          <div className="bg-slate-100 col-start-4 p-4 rounded-md">
            <p className="font-semibold">Grand Total: ${order?.grandTotal}</p>
            <p className="font-semibold">Order Status: {order?.orderStatus}</p>
          </div>
        </div>
      </div>
    </>
  );
};
