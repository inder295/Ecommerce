import { useEffect, useState } from 'react';
import { LuX } from 'react-icons/lu';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrders } from '../../store/useOrder';
import Spinner from '../Shopfront/Spinner';
import toast from 'react-hot-toast';

export const OrdersStatusModal = ({ closeModal }) => {
  const [status, setStatus] = useState(null);
  const { orderId } = useParams();
  const { changingOrderStatus, orderStatus } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  async function handleStatus(e) {
    const value = e.target.value;
    setStatus(value);

    await orderStatus(orderId, value);
    await navigate('/admin/orders');
  }

  if (changingOrderStatus) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md"></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded  p-8  shadow-md ">
        <div className="flex justify-between">
          <p className="text-2xl font-bold text-center m-2 mt-0 pt-0 p-2">
            Order Statuses
          </p>
          <LuX
            className="hover:cursor-pointer -m-4 text-3xl"
            onClick={closeModal}
          />
        </div>
        <button
          className="p-2 m-2 bg-red-600 hover:bg-red-400 rounded-md font-bold text-md shadow"
          onClick={handleStatus}
          value="PENDING"
        >
          PENDING
        </button>
        <button
          className="p-2 m-2 bg-green-600 hover:bg-green-500 rounded-md font-bold text-md"
          onClick={handleStatus}
          value="OUT_FOR_DELIVERY"
        >
          OUT_FOR_DELIVERY
        </button>
        <button
          className="p-2 m-2 bg-blue-400 hover:bg-blue-300 rounded-md font-bold text-md"
          onClick={handleStatus}
          value="COMPLETE"
        >
          COMPLETE
        </button>
        <button
          className="p-2 m-2 bg-white hover:bg-slate-100 rounded-md font-bold text-md"
          onClick={handleStatus}
          value="CANCELLED"
        >
          CANCELLED
        </button>
      </div>
    </>
  );
};
