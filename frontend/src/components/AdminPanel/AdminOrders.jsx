import React, { useEffect } from 'react';
import { useOrders } from '../../store/useOrder';
import { LuSkipForward } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  const { adminOrders, fetchingAdminOrders, adminOrdersList } = useOrders();

  useEffect(() => {
    adminOrders();
  }, []);

  return (
    <>
      <div className="ml-64 p-5 ">
        <p className="font-bold text-2xl my-4"> All Orders</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Order ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Grand Total
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {fetchingAdminOrders ? (
                <tr>
                  <td className="px-4 py-2 text-sm" colSpan="3">
                    Loading....
                  </td>
                </tr>
              ) : adminOrdersList && adminOrdersList.length > 0 ? (
                adminOrdersList.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 text-left text-sm ">{item.id}</td>
                    <td className="px-4 py-2 text-left text-sm">
                      ${item.grandTotal}
                    </td>
                    <td className="px-4 py-2 text-left text-sm">
                      {item.orderStatus}
                    </td>

                    <td>
                      <Link to={`${item.id}`}>
                        <LuSkipForward className="hover:cursor-pointer mx-5" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-500" colSpan="3">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      ;
    </>
  );
};

export default AdminOrders;
