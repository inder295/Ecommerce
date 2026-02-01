import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../../store/useProduct';
import { PdpImageCorosel } from './PdpImageCorosel';
import { PdpAttributes } from './pdpAttributes';
import { useCart } from '../../store/useCart';
import { Loader } from 'lucide-react';
import { useAuth } from '../../store/useAuth';
import Spinner from './Spinner';

import { Wishlist } from './wishlist';

export const PdpSection = () => {
  const { id } = useParams();

  const { fetchProductById, isPdpFetching, productDetails } = useProduct();
  const { addToCart, addingInCart } = useCart();
  const cartTotalCount = useCart((state) => state.cartTotalCount);
  const { authUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    fetchProductById(id);
  }, []);

  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  async function submitForm(e) {
    if (!authUser) {
      navigate('/signin');
      return;
    }

    e.preventDefault();
    await addToCart({ productId: id, quantity });
    await cartTotalCount();
  }

  return isPdpFetching ? (
    <Spinner />
  ) : (
    < >
      <div className="mt-2 max-w-screen-xl m-auto flex justify-center ">
        <div className="grid grid-cols-8 pt-0 mx-auto ">
         
          <div className="col-start-1 col-span-5 w-full">
            <PdpImageCorosel image={productDetails.image} />
          </div>
         
          <div className="col-start-6 col-span-3 font-bold text-wrap mx-10">
            <div className=" flex justify-between">
              <div className="text-2xl">{productDetails.name}</div>
              <div className="mx-10 mr-0">
                <Wishlist />
              </div>
            </div>

            <div className=" text-xl mt-5 ml-0">${productDetails.price}</div>
            <PdpAttributes attributes={productDetails.attributes} />

            <form>
              <div class="max-w-xs mt-5">
                <div class="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={handleDecrement}
                  >
                    <svg
                      class="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    value={quantity}
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={handleIncrement}
                  >
                    <svg
                      class="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={submitForm}
                class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {addingInCart ? (
                  <Loader className="animate-spin" />
                ) : (
                  'Add To Cart'
                )}
              </button>
            </form>

            <div>
              <h1>Description</h1>
              <p className="m-2 text-wrap">{productDetails.description}</p>
            </div>


          </div>
        </div>
      </div>

      
    </>
  );
};
