// src/pages/OrderConfirmation.jsx
export default function OrderConfirmation() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50 py-10 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
          🎉 Order Confirmed!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Thank you for your purchase,{' '}
          <span className="font-medium">Inderpreet Singh</span>. Your order has
          been placed successfully.
        </p>

        {/* Order Details */}
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Shipping Address</h3>
            <p className="text-gray-700">Inderpreet Singh</p>
            <p className="text-gray-700">New York</p>
            <p className="text-gray-700">
              123 Main St, Apt 4B, New York, NY 10001
            </p>
            <p className="text-gray-700">📞 98111484764</p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
            <p className="text-gray-700 capitalize">Stripe</p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Shipment</h3>
            <p className="text-gray-700 capitalize">Standard Shipping</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
