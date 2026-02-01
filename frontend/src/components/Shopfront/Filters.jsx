import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useProduct } from '../../store/useProduct';

export const Filters = ({ products }) => {
  const { filter, minPrice, maxPrice } = useMemo(() => {
    let data = products.map((product) => product.attributes);
    let prices = products.map((product) => product.price) || [];

    let minPrice = 0;
    let maxPrice = 0;

    minPrice = prices.length ? Math.min(...prices).toString() : '0';
    maxPrice = prices.length ? Math.max(...prices).toString() : '1000';

    function buildFilter2DArray(data) {
      let filterMap = new Map();

      data.forEach((item) => {
        Object.entries(item).forEach(([key, values]) => {
          if (!filterMap.has(key)) {
            filterMap.set(key, new Set());
          }

          let arr = Array.isArray(values) ? values : [values];

          arr.forEach((v) => {
            if (v) filterMap.get(key).add(v);
          });
        });
      });

      return Array.from(filterMap.entries()).map(([key, set]) => [
        key,
        Array.from(set),
      ]);
    }

    let attributes = buildFilter2DArray(data).flat();

    const filter = [];
    for (let i = 0; i < attributes.length; i += 2) {
      filter.push({ key: attributes[i], values: attributes[i + 1] });
    }

    return { filter, minPrice, maxPrice };
  }, [products]);

  const [attribute, setAttribute] = useState({});
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const {filterProducts}=useProduct();

  const prevWasEmpty=useRef(false);
  
  useEffect(() => {
     
    const isEmpty=Object.keys(attribute).length===0;

    if(priceRange[0]===minPrice && priceRange[1]===maxPrice && isEmpty){
      return;
    }

    if(isEmpty && !prevWasEmpty.current){
           
        prevWasEmpty.current=true;
        return;
    }

    prevWasEmpty.current=false;
     
    
    const timer = setTimeout(async () => {
      await filterProducts(attribute,priceRange);
    }, 500);

  return () => clearTimeout(timer);

  }, [attribute,priceRange]);

  const handleAttributeChange = useCallback((key, value, checked) => {
    setAttribute((prev) => {
      const updated = { ...prev };

      if (checked) {
        if (!updated[key]) {
          updated[key] = [];
        }
        if (!updated[key].includes(value)) {
          updated[key].push(value);
        }
      } else {
        if (updated[key]) {
          updated[key] = updated[key].filter((v) => v !== value);
          if (updated[key].length === 0) {
            delete updated[key];
          }
        }
      }
      return updated;
    });
  }, []);

  const clearAttribute=()=>{
    setAttribute({});
    window.location.reload();
  }

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-2 mt-0 pt-0 md:w-64 sm:w-full z-0">
      <aside className="w-full m-auto md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 md:h-screen md:sticky top-0  ">
       

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex justify-between">
          <p>Filters</p>
          <button onClick={()=> {clearAttribute()}} className='text-blue-500 '>Clear</button>
          
        </h2>

        {filter.map(({ key, values }) => (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {key}
            </h3>
            <ul className="space-y-2 text-sm">
              {values.map((value) => (
                <li className="flex items-center" key={value}>
                  <input
                    id={value}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded cursor-pointer"
                    onChange={(e) =>
                      handleAttributeChange(key, value, e.target.checked)
                    }
                  />
                  <label
                    htmlFor={value}
                    className="ml-2 text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    {value}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price
          </h3>

          <label className="cursor-pointer">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full accent-blue-600 cursor-pointer"
            />

            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </label>
          
          <div className='flex justify-between text-sm mt-4 text-gray-500'>
            <pre className='border-2 w-full'>{String(priceRange[0])} </pre>
            <pre className='w-full text-center'>to</pre>
            <pre className='border-2 w-full'>{String(priceRange[1])}</pre>

          </div>
        </div>
      </aside>
    </div>
  );
};
