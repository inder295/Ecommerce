export const Filters = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 mt-0 pt-0  md:w-64 sm:w-full">
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 md:h-screen md:sticky top-0">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Filters
        </h2>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Colors
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <input
                id="laptops"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="laptops"
                className="ml-2 text-gray-700 dark:text-gray-300"
              >
                Red
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="phones"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="phones"
                className="ml-2 text-gray-700 dark:text-gray-300"
              >
                Black
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="accessories"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="accessories"
                className="ml-2 text-gray-700 dark:text-gray-300"
              >
                White
              </label>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price
          </h3>
          <input
            type="range"
            min="0"
            max="1000"
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Brand
          </h3>
          <select className="w-full border-gray-300 rounded-md text-sm p-2 dark:bg-gray-700 dark:text-gray-200">
            <option>All</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Dell</option>
            <option>Sony</option>
          </select>
        </div>
      </aside>
    </div>
  );
};
