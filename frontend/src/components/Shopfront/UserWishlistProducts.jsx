import { useEffect } from 'react';
import { useWishlist } from '../../store/useWishlist';
import Spinner from './Spinner';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const UserWishlistProducts = () => {
  const { getAllWishlistItems, wishlistItems, fetchWishlist } = useWishlist();

  useEffect(() => {
    getAllWishlistItems();
  }, []);

  const items = wishlistItems.map((item) => {
    return (
      <Link to={`/product/${item.id}`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
        >
          <a href="#">
            <img
              class="p-8 rounded-t-lg h-80 w-full"
              src={item.image[0]}
              alt={item.name}
            />
          </a>
          <div class="px-5 pb-3">
            <p>{item.brand}</p>
          </div>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                {item.name}
              </h5>
            </a>

            <div class="flex items-center justify-between mt-4">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  });

  return fetchWishlist ? (
    <Spinner />
  ) : (
    <div className="w-[80%] mx-auto grid grid-cols-3 gap-5 my-6 ">
      {items.length ? (
        items
      ) : (
        <div className="text-xl text-center">No Product added in wishlist</div>
      )}
    </div>
  );
};

export default UserWishlistProducts;
