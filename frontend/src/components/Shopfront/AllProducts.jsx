import { Link } from 'react-router-dom';
import { useProduct } from '../../store/useProduct';
import { motion } from 'motion/react';

export const AllProducts = ({ products }) => {
  const { isProductFetching } = useProduct();
  const productNotFound =
    'https://stores.lifestylestores.com/VendorpageTheme/Enterprise/EThemeForLifestyleUpdated/images/product-not-found.jpg';

  if (isProductFetching) {
    return (
      <>
        <div>
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
          </div>
        </div>
      </>
    );
  }

  if (products.length === 0) {
    return (
      <>
        <div className="text-center w-full mx-auto my-60">
          <image src={productNotFound} alt="" width="100" height="100" />
          <p className="text-2xl">Products not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-25 mr-20 font-serif">
        {products.map((p) => {
          return (
            <Link key={p.id} to={`/product/${p.id}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
              >
                <img
                  class="p-2 rounded-t-lg h-80 w-full object-contain"
                  src={`${p.image[0]}` || '/camera.jpg'}
                  alt="product image"
                />

                <div class="px-4 pb-4">
                  <div className="mb-1">
                    <p class="text-sm tracking-tight text-gray-900 dark:text-white">
                      {p.brand !== 'Unknown' ? p.brand : null}
                    </p>
                  </div>

                  <div>
                    <h5 class="text-lg font-semibold line-clamp-2 tracking-tight text-gray-900 dark:text-white">
                      {p.name}
                    </h5>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      ${p.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
