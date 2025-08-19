import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductListPage } from './pages/ProductListPage';
import { ProductDetailPage } from './pages/Product-Detail-Page';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-id" element={<ProductDetailPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="order-success" element={<OrderConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
