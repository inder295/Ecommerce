import { useEffect, useState } from 'react';
import { useProduct } from '../../store/useProduct';
import { AllProducts } from './AllProducts';
import { Filters } from './Filters';
import { Pagination } from '@mui/material';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';

export const PlpMainSection = () => {
  const {
    fetchAllProducts,
    isProductFetching,
    pagination,
    products,
    categoryProductFetching,
  } = useProduct();
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    fetchAllProducts(page);
  }, [location.pathname === '/product-list']);

  function handlePage(e, value) {
    setPage(value);
    fetchAllProducts(value);
  }

  return isProductFetching || categoryProductFetching ? (
    <Spinner />
  ) : (
    <>
      <div className="w-80% mx-auto">
        <p className="flex justify-end m-3 mx-20 font-semibold">
          {pagination.totalProducts} products
        </p>
        <div className="flex justify-center items-start flex-col gap-20 md:flex-row  py-0 sm:w-full px-5 m-0 ">
          <Filters products={products} />
          <AllProducts products={products} />
        </div>
        <div className="flex justify-end m-10 mx-25">
          <Pagination
            count={pagination.totalPages}
            color="primary"
            page={page}
            onChange={handlePage}
          />
        </div>
      </div>
    </>
  );
};
