import React, { useState } from 'react';
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Lock } from 'lucide-react';
import { Header } from '../../components/Shopfront/Header';
import { Category } from '../../components/Shopfront/Category';
import { Footer } from '../../components/Shopfront/Footer';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop',
      quantity: 1,
      color: 'Black',
      size: 'Standard',
      inStock: true,
    },
    {
      id: 2,
      name: 'Bluetooth Speaker',
      price: 89.99,
      originalPrice: null,
      image:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop',
      quantity: 2,
      color: 'Blue',
      size: null,
      inStock: true,
    },
    {
      id: 3,
      name: 'Wireless Mouse',
      price: 49.99,
      originalPrice: 69.99,
      image:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop',
      quantity: 1,
      color: 'White',
      size: null,
      inStock: false,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setAppliedPromo({
        code: 'SAVE10',
        discount: 0.1,
        description: '10% off',
      });
    } else if (promoCode.toLowerCase() === 'free20') {
      setAppliedPromo({ code: 'FREE20', discount: 20, description: '$20 off' });
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);

  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax

  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.discount < 1) {
      discount = subtotal * appliedPromo.discount; // Percentage discount
    } else {
      discount = appliedPromo.discount; // Fixed amount discount
    }
  }

  const total = subtotal + shipping + tax - discount;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8">Add some items to get started!</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Category />
      <div className="max-w-6xl mx-auto px-4 py-8 mt-40">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-1">
              {cartItems.length} items in your cart
            </p>
          </div>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-6 ${index !== cartItems.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>

                      {/* Product Options */}
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        {item.color && <span>Color: {item.color}</span>}
                        {item.size && <span>Size: {item.size}</span>}
                      </div>

                      {/* Stock Status */}
                      {!item.inStock && (
                        <p className="text-red-600 text-sm font-medium mb-2">
                          Out of Stock
                        </p>
                      )}

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg font-bold text-gray-900">
                          ${item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-gray-50 transition-colors"
                            disabled={!item.inStock}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 text-center min-w-[3rem]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-gray-50 transition-colors"
                            disabled={!item.inStock}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.originalPrice && (
                        <p className="text-sm text-green-600">
                          Save $
                          {(
                            (item.originalPrice - item.price) *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                      )}
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md p-3">
                    <span className="text-green-800 font-medium">
                      {appliedPromo.code}
                    </span>
                    <button
                      onClick={removePromoCode}
                      className="text-green-600 hover:text-green-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Order Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span>-${savings.toFixed(2)}</span>
                  </div>
                )}

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedPromo.description})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Banner */}
              {shipping > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mb-6">
                  <p className="text-blue-800 text-sm">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mb-4">
                <Lock className="w-4 h-4" />
                <span>Secure Checkout</span>
              </button>

              {/* Security Notice */}
              <p className="text-xs text-gray-500 text-center">
                Your payment information is encrypted and secure
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
