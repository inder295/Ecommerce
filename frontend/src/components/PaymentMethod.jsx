// src/components/PaymentMethod.jsx
export default function PaymentMethod({ value, onChange }) {
  return (
    <div className="p-4 border rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="stripe"
            checked={value === 'stripe'}
            onChange={(e) => onChange(e.target.value)}
          />
          Pay with Stripe
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={value === 'cod'}
            onChange={(e) => onChange(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>
    </div>
  );
}
