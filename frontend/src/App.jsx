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
import AdminCategories from './components/AdminPanel/AdminCategories';
import CreateCategory from './components/AdminPanel/CreateCategory';
import { ScrollToTop } from './routes/ScrollToTop';
import { UserPrivateRoutes } from './routes/UserPrivateRoutes';
import { UserPublicRoute } from './routes/UserPublicRoute';
import About from './pages/Shopfront/About';

function App() {
  

  return (
    <>
      <Toaster position="top-right" />
       <ScrollToTop/>
      <Routes>

       
        //user routes wishlist and review
        <Route element={<UserPublicRoute/>} >
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
          <Route path='/about' element={<About/>} />
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-list/:categoryId" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        
        <Route element={<UserPrivateRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/checkout" element={<CheckoutPage />} />
          <Route path="/cart/checkout/order-success" element={<OrderConfirmation />} />
        </Route>
        
        //admin routes
        <Route path="/admin-login" element={<AdminPublicRoute> <AdminSignin /></AdminPublicRoute>  } />
        <Route path="/admin/*" element={<AdminPrivateRoute> <Admin /> </AdminPrivateRoute> }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="category" element={<AdminCategories/>} />
          <Route path='create-category' element={<CreateCategory/>} />
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
