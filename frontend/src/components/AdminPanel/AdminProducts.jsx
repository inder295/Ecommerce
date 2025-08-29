import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export const AdminProducts = () => {
  return (
    <div className='ml-64 p-5'>
     

      <div className='flex justify-between'>
         <div className='text-2xl font-bold my-3 '>
          All Products 
        </div>
       <Link to="/admin/create-product">
       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Product</button>
       </Link>
      </div>
     

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Category</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Stock</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 text-sm">1</td>
            <td className="px-4 py-2 text-sm">Wireless Headphones</td>
            <td className="px-4 py-2 text-sm">₹2999</td>
            <td className="px-4 py-2 text-sm">Electronics</td>
            <td className="px-4 py-2 text-sm">25</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 text-sm">2</td>
            <td className="px-4 py-2 text-sm">Running Shoes</td>
            <td className="px-4 py-2 text-sm">₹1999</td>
            <td className="px-4 py-2 text-sm">Footwear</td>
            <td className="px-4 py-2 text-sm">10</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 text-sm">3</td>
            <td className="px-4 py-2 text-sm">Coffee Mug</td>
            <td className="px-4 py-2 text-sm">₹499</td>
            <td className="px-4 py-2 text-sm">Home</td>
            <td className="px-4 py-2 text-sm">50</td>
          </tr>
        </tbody>
      </table>
    </div>

   

  
   
    </div>
  )
}


