import { useEffect } from "react";
import { useProduct } from "../../store/useProduct";
import { Link } from "react-router-dom";

export const Cards = () => {
   
  const {fetchAllProducts}=useProduct();
  
  const products=useProduct((state)=>state.products);
  useEffect(()=>{
     fetchAllProducts();
  },[fetchAllProducts])

 
  return (
    <div className="flex flex-wrap justify-center gap-2 p-4 ">
    {
      products.map((p)=>(
           <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
        <Link to={`/product/${p.id}`} >
          <img
            class="p-8 rounded-t-lg h-80"
            src={p.image[0]}
            alt="product image"
          />
        </Link>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 truncate">
              {p.name}
            </h5>
          </a>

          <div class="flex items-center justify-between mt-4">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              $ {p.price}
            </span>
          
          </div>
        </div>
      </div>

      ))
    }
      
     
     
    </div>
  );
};
