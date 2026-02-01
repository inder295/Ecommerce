import { useEffect } from 'react';
import { useCategory } from '../../store/useCategory';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useProduct } from '../../store/useProduct';
import toast from 'react-hot-toast';

export const Category = () => {
  const { isCategoryFetching, categories, fetchAllCategories } = useCategory();
  const { fetchProductsByCategory } = useProduct();

  const location = useLocation();

  const { categoryId } = useParams();

  useEffect(() => {
    fetchAllCategories();
  }, []);

  useEffect(() => {
    fetchProductsByCategory(categoryId);
  }, [location.pathname === `/category/${categoryId}`, categoryId]);

  async function handleCategory() {
    try {
      fetchProductsByCategory(categoryId);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="fixed top-16 left-0 right-0 mb-6 z-10 font-serif">
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {isCategoryFetching ? (
                <p className="">Loading...</p>
              ) : (
                categories.map((category) => (
                  <li
                    className="cursor-pointer hover:text-blue-600"
                    key={category.id}
                    onClick={handleCategory}
                  >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
