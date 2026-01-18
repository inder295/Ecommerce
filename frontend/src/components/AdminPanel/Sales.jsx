import React from 'react';
import { LuBoxes } from 'react-icons/lu';
import { BiCycling } from 'react-icons/bi';
import { BiCube } from 'react-icons/bi';
import { BiGhost } from 'react-icons/bi';
import { useEffect } from 'react';
import { useAnalytics } from '../../store/useAnalytics';
import { SalesAnalytics } from './SalesAnalytics';

export const Sales = () => {
  const {
    totalOrder,
    pendingOrders,
    completedOrders,
    canceledOrders,
    fetchingOrderData,
    getOrderData,
  } = useAnalytics();

  useEffect(() => {
    getOrderData();
  }, []);

  if (fetchingOrderData) {
    return (
      <>
        <div className="flex ml-64 p-10 gap-8">
          <div className="bg-slate-200 h-24 w-[120px]"></div>
          <div className="bg-slate-200 h-24 w-[120px]"></div>
          <div className="bg-slate-200 h-24 w-[120px]"></div>
          <div className="bg-slate-200 h-24 w-[120px]"></div>
          <div className="bg-slate-200 h-24 w-[120px]"></div>
        </div>
      </>
    );
  }

  return (
    <div className="ml-64 p-10">
      <div className="flex gap-8 ">
        <div className="border-2 shadow-md p-2 rounded hover:shadow-lg hover:cursor-move">
          <p className="m-2 text-4xl font-bold flex">
            {totalOrder}
            <span className="px-4">
              <LuBoxes />{' '}
            </span>
          </p>
          <p className="m-2 text-3xl font-semibold ">Total Orders</p>
        </div>

        <div className="border-2 shadow-md p-2 rounded hover:shadow-lg hover:cursor-move">
          <p className="m-2 text-4xl font-bold flex">
            {pendingOrders}
            <span className="px-4">
              <BiCycling />
            </span>
          </p>
          <p className="m-2 text-3xl font-semibold ">Pending Orders</p>
        </div>

        <div className="border-2 shadow-md p-2 rounded hover:shadow-lg hover:cursor-move">
          <p className="m-2 text-4xl font-bold flex">
            {completedOrders}
            <span className="px-4">
              <BiCube />{' '}
            </span>
          </p>
          <p className="m-2 text-3xl font-semibold ">Completed Orders</p>
        </div>

        <div className="border-2 shadow-md p-2 rounded hover:shadow-lg hover:cursor-move">
          <p className="m-2 text-4xl font-bold flex">
            {canceledOrders}
            <span className="px-4">
              <BiGhost />{' '}
            </span>
          </p>
          <p className="m-2 text-3xl font-semibold ">Cancelled Orders</p>
        </div>
      </div>

      <SalesAnalytics />
    </div>
  );
};
