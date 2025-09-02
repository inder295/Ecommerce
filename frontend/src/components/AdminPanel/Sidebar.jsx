import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div class="w-64 h-screen bg-white fixed top-0 left-0 border-2 shadow-sm">
      <Link to="/admin/dashboard">
        <div class="p-5 font-bold text-2xl">Burito Panel</div>
      </Link>
      <ul class="space-y-2 p-4">
        <li>
          <Link
            to="/admin/dashboard"
            href="#"
            class="block p-2 hover:bg-slate-100 rounded"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/products"
            class="block p-2 hover:bg-slate-100 rounded"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/admin/customers"
            class="block p-2 hover:bg-slate-100 rounded"
          >
            Customer
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" class="block p-2 hover:bg-slate-100 rounded">
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};
