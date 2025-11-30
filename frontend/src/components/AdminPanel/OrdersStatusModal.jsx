
export const OrdersStatusModal = ({closeModal}) => {
  return (
    <>
    <div className="fixed inset-0 bg-black/20 backdrop-blur-md"></div>
      

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded  p-8  shadow-md ">
        <p className="text-2xl font-bold text-center m-2 mt-0 pt-0 p-2">Order Statuses</p>
        <button className="p-2 m-2 bg-red-600 hover:bg-red-400 rounded-md font-bold text-md shadow" onClick={closeModal}>PENDING</button>
        <button className="p-2 m-2 bg-green-600 hover:bg-green-500 rounded-md font-bold text-md" onClick={closeModal}>OUT_FOR_DELIVERY</button>
        <button className="p-2 m-2 bg-blue-400 hover:bg-blue-300 rounded-md font-bold text-md" onClick={closeModal}>COMPLETE</button>
        <button className="p-2 m-2 bg-white hover:bg-slate-100 rounded-md font-bold text-md" onClick={closeModal}>CANCELLED</button>
      </div>
    </>
  )
}


