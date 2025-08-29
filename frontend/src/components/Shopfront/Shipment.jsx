// src/components/Shipment.jsx
export default function Shipment({ value, onChange }) {
  return (
    <div className="p-4 border rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Shipment</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="shipment"
            value="standard"
            checked={value === 'standard'}
            onChange={(e) => onChange(e.target.value)}
          />
          Standard (3-5 days)
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="shipment"
            value="express"
            checked={value === 'express'}
            onChange={(e) => onChange(e.target.value)}
          />
          Express (1-2 days)
        </label>
      </div>
    </div>
  );
}
