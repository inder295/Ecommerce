import { Link } from 'react-router-dom';
import { getAllPrducts } from '../../Api/product.api';
import { useEffect, useState } from 'react';

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const getData = async () => {
    setloading(true);
    try {
      const res = await getAllPrducts();
      setProducts(res.products);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-25 mr-20 ">
      {loading ? (
        <div> Loading ... </div>
      ) : (
        products.map((p) => {
          return (
            <Link key={p.id} to={`/product/${p.id}`}>
              <div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
                <img
                  class="p-2 rounded-t-lg h-40 w-full object-contain"
                  src={`${p.image}` || '/camera.jpg'}
                  alt="product image"
                />

                <div class="px-4 pb-4">
                  <div>
                    <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      {p.name}
                    </h5>
                  </div>

                  <div class="flex items-center justify-between mt-3">
                    <span class="text-xl font-bold text-gray-900 dark:text-white">
                      ${p.price}
                    </span>
                    <div class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}

      <div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
        <a href="#">
          <img
            class="p-2 rounded-t-lg h-40 w-full object-contain"
            src="/macbok.jpg"
            alt="product image"
          />
        </a>
        <div class="px-4 pb-4">
          <a href="#">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case
            </h5>
          </a>

          <div class="flex items-center justify-between mt-3">
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
        <a href="#">
          <img
            class="p-2 rounded-t-lg h-40 w-full object-contain"
            src="/girl.webp"
            alt="product image"
          />
        </a>
        <div class="px-4 pb-4">
          <a href="#">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case
            </h5>
          </a>

          <div class="flex items-center justify-between mt-3">
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
        <a href="#">
          <img
            class="p-2 rounded-t-lg h-40 w-full object-contain"
            src="/girl.webp"
            alt="product image"
          />
        </a>
        <div class="px-4 pb-4">
          <a href="#">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case
            </h5>
          </a>

          <div class="flex items-center justify-between mt-3">
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
