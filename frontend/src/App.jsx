import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductListPage } from './pages/ProductListPage';
import { ProductDetailPage } from './pages/Product-Detail-Page';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmation from './components/Shopfront/OrderConfirmation';
import { PageNotFound } from './pages/PageNotFound';
import { Dashboard } from './pages/Admin/Dashboard';
import { AdminProducts } from './components/AdminPanel/AdminProducts';
import { AdminCustomers } from './components/AdminPanel/AdminCustomers';
import AdminOrders from './components/AdminPanel/AdminOrders';
import CreateProduct from './components/AdminPanel/CreateProduct';
import { Admin } from './pages/Admin/Admin';

function App() {
  return (
    <>
      <Routes>
        //user routes wishlist and review
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="order-success" element={<OrderConfirmation />} />

      //admin routes
      <Route path="/admin/*" element={<Admin/>}>
            <Route index element={<Navigate to="dashboard" replace/>}  />
            <Route path="dashboard" element={<Dashboard/>} />
            
                
            <Route path="products" element={<AdminProducts/>} />
            <Route path="create-product" element={<CreateProduct/>}/>
            
                
            
            <Route path="customers" element={<AdminCustomers/>} />
            <Route path="orders" element={<AdminOrders/>}/>
            </Route>
         
     
                  
           
       
      </Routes>
    </>
  );
}

export default App;
