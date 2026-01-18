import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../../store/useOrder';
import { OrdersStatusModal } from './OrdersStatusModal';

export const OrderDetailsByUser = () => {
  const { orderId } = useParams();
  const {
    getOrderByIdForAdmin,
    fetchingAdminOrderById,
    adminOrderDetailsById,
  } = useOrders();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (orderId) {
      getOrderByIdForAdmin(orderId);
    }
  }, [orderId]);

  function handleModal() {
    setModal(!modal);
  }

  if (fetchingAdminOrderById) {
    return (
      <>
        <div class="m-28 ml-64 w-full max-w-lg rounded-md border">
          <div class="flex animate-pulse space-x-4">
            <div class="flex-1  py-1">
              <div class="m-16">
                <div class="grid grid-cols-3 gap-4">
                  <div class="col-span-2 h-96 rounded bg-gray-200"></div>
                  <div class="col-span-1 h-96 rounded bg-gray-200"></div>
                  <div class="col-span-1 h-96 rounded bg-gray-200"></div>
                  <div class="col-span-1 h-96 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mx-64 p-4 ">
      <p className="text-2xl font-bold"> Order Details </p>

      <div className="">
        <div className="grid grid-cols-5 gap-4 p-12 my-12 pt-2 ">
          <div className="bg-slate-100 col-span-3  p-4 rounded-lg">
            <h2 className="text-xl font-bold">Ordered Items</h2>

            {adminOrderDetailsById?.orderItem &&
            adminOrderDetailsById.orderItem.length > 0 ? (
              adminOrderDetailsById.orderItem.map((item, index) => (
                <div key={index} className="flex py-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 object-cover"
                  />
                  <div className="mx-3">
                    <p className="font-semibold line-clamp-2">{item.name}</p>
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
          <div className="bg-slate-100 rounded-md p-4  w-96">
            <p className="text-xl font-bold ">Address</p>
            <div className="my-4">
              <p>{adminOrderDetailsById?.address?.fullname}</p>
              <p>{adminOrderDetailsById?.address?.email}</p>
              <p>{adminOrderDetailsById?.address?.phone}</p>
              <p>{adminOrderDetailsById?.address?.address}</p>
              <p>{adminOrderDetailsById?.address?.city}</p>
              <p>{adminOrderDetailsById?.address?.state}</p>
              <p>{adminOrderDetailsById?.address?.country}</p>
              <p>{adminOrderDetailsById?.address?.zip}</p>
            </div>

            <div className="col-start-4 col-end-6 ">
              <h2 className="text-xl font-bold my-4">Payment Details</h2>
              <p className="">
                Payment Method : {adminOrderDetailsById?.paymentMethod}
              </p>
              <p className="">
                Payment Status : {adminOrderDetailsById?.paymentStatus}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold my-4">Shipping Details</h2>
              <p>Shipping Method : {adminOrderDetailsById?.shipmentMehod}</p>
            </div>
          </div>

          <div className=" col-span-2 col-end-3">
            <button className="m-2 p-2 px-4 bg-black font-bold text-white rounded hover:bg-gray-800 ">
              Invoice
            </button>
            <button
              className="m-2 p-2 px-4 bg-black font-bold text-white rounded hover:bg-gray-800"
              onClick={() => setModal(true)}
            >
              Order Status{' '}
            </button>
            {modal && <OrdersStatusModal closeModal={handleModal} />}
          </div>

          <div className="bg-slate-100 col-start-4 col-end-6 p-4 rounded-md w-96 ">
            <p className="font-semibold">
              Grand Total: ${adminOrderDetailsById?.grandTotal}
            </p>
            <p className="font-semibold">
              Order Status: {adminOrderDetailsById?.orderStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
