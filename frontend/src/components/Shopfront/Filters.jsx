import { useMemo } from "react";


export const Filters = ({products}) => {
  
  
  const {filter,minPrice,maxPrice}=useMemo(()=>{
       let data = products.map(product => product.attributes );
       let prices=products.map(product=>product.price) || []
       console.log(products);
       
        console.log(prices);
        
        let minPrice=0;
        let maxPrice=0;

        minPrice=prices.length ? Math.min(...prices).toString() : "0";
        maxPrice=prices.length ? Math.max(...prices).toString() : "1000";

        console.log(minPrice,maxPrice);
        
        
        function buildFilter2DArray(data) {
        let filterMap = new Map();

          data.forEach(item => {
            Object.entries(item).forEach(([key, values]) => {
              if (!filterMap.has(key)) {
                filterMap.set(key, new Set());
              }

            
              let arr = Array.isArray(values) ? values : [values];

              arr.forEach(v => {
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

        return {filter,minPrice,maxPrice};
     },[products])
 
  
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-2 mt-0 pt-0 md:w-64 sm:w-full">
      <aside className="w-full m-auto md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 md:h-screen md:sticky top-0  ">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Filters
        </h2>

        {
          filter.map((({key,values})=>(
                  
                <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {key}
              </h3>
              <ul className="space-y-2 text-sm">
                {
                  values.map((value)=>(

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
                    {value}
                  </label>
                </li>
                  )
                      
                  )
                }
               
              </ul>
            </div>
                          
          )))
        }

        

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price
          </h3>
          <input
            type="range"
            min= {minPrice} 
            max= {maxPrice}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
        </div>

       
      </aside>
    </div>
  );
};
