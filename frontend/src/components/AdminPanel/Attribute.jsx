import React from 'react';

export const Attribute = ({ attribute }) => {
  return (
    <div className="space-y-6  p-2 pt-2 mt-2 rounded text-sm">
      {Object.entries(attribute).map(([key, values]) => (
        <div key={key} className="bg-gray-100 p-4 rounded">
          <h3 className="text-sm font-medium text-gray-900 mb-3 capitalize">
            {key}
          </h3>

          <div className="flex flex-wrap gap-2">
            {values.map((val) => (
              <button
                key={val}
                disabled="true"
                className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors border-gray-300 text-gray-700 hover:border-gray-400`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
