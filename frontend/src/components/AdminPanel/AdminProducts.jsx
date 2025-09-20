import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useProduct } from '../../store/useProduct';

export const AdminProducts = () => {

  const {fetchAllProducts,isProductFetching,products}=useProduct();

  useEffect(()=>{
    fetchAllProducts()
  },[])

  return (
    <div className="ml-64 p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-bold my-3 ">All Products</div>
        <Link to="/admin/create-product">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Product
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Image
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Price
              </th>
              
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Stock
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">

            {
              isProductFetching ? <tr>
                <td className="px-4 py-2 text-sm">Loading....</td>
              </tr> :
              (products.map((product,index)=>(
                <tr className="hover:bg-gray-50" key={product.id || index}>
                  <td className="px-4 py-2 text-sm">{product.id}</td>
                  <td className="px-4 py-2 text-sm">
                    <img
            src={product.image[0]}
            alt={product.name}
            className="w-12 h-15 object-cover rounded"
          />
                  </td>
                  <td className="px-4 py-2 text-sm w-20">{product.name}</td>
                  <td className="px-4 py-2 text-sm">${product.price}</td>
                  
                  <td className="px-4 py-2 text-sm">{product.inventory}</td>
                </tr>

              )))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
