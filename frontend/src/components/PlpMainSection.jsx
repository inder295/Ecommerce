import { AllProducts } from './AllProducts';
import { Filters } from './Filters';

export const PlpMainSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start px-5 py-0 md:flex-row ">
        <Filters />
        <AllProducts />
      </div>
    </>
  );
};
