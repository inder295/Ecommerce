import { Signup } from './pages/Shopfront/Signup';
import { Signin } from './pages/Shopfront/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Shopfront/Home';
import { ProductListPage } from './pages/Shopfront/ProductListPage';
import { ProductDetailPage } from './pages/Shopfront/Product-Detail-Page';
import CartPage from './pages/Shopfront/CartPage';
import CheckoutPage from './pages/Shopfront/CheckoutPage';
import OrderConfirmation from './components/Shopfront/OrderConfirmation';
import { PageNotFound } from './pages/Shopfront/PageNotFound';
import { Dashboard } from './pages/Admin/Dashboard';
import { AdminProducts } from './components/AdminPanel/AdminProducts';
import { AdminCustomers } from './components/AdminPanel/AdminCustomers';
import AdminOrders from './components/AdminPanel/AdminOrders';
import CreateProduct from './components/AdminPanel/CreateProduct';
import { Admin } from './pages/Admin/Admin';
import { AdminSignin } from './pages/Admin/AdminSignin';
import { Toaster } from 'react-hot-toast';
import { AdminPublicRoute } from './routes/AdminPublicRoute';
import { AdminPrivateRoute } from './routes/AdminPrivateRoute';

function App() {
  

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        //user routes wishlist and review
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="order-success" element={<OrderConfirmation />} />
        
        
        //admin routes
        <Route path="/admin-login" element={<AdminPublicRoute> <AdminSignin /></AdminPublicRoute>  } />
        <Route path="/admin/*" element={<AdminPrivateRoute> <Admin /> </AdminPrivateRoute> }>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
