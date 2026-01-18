import { Link } from 'react-router-dom';
import { useCategory } from '../../store/useCategory';
import { useEffect } from 'react';

export const AdminCategories = () => {
  const { fetchAllCategories, isCategoryFetching, categories } = useCategory();

  useEffect(() => {
    try {
      fetchAllCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="ml-64 p-4">
      {isCategoryFetching ? (
        <div>Loading... </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <div className="text-2xl font-bold my-3 ">Category</div>
            <Link to="/admin/create-category">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add Category
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 ">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 ">
                    Description
                  </th>
                  <th className="pr-10 py-2 text-right text-sm font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              {categories.map((category, index) => (
                <tbody
                  className="divide-y divide-gray-200 cursor-pointer"
                  key={index}
                >
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm w-40 truncate">
                      {category.id}
                    </td>
                    <td className="px-4 py-2 text-sm w-40 truncate">
                      {category.name}
                    </td>
                    <td className="px-4 py-2 text-sm w-100 break-all">
                      {category.description}
                    </td>
                    <td className="px-12 my-2 cursor-pointer">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;
