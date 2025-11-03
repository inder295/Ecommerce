
const UserWishlistProducts = () => {
  return (
    <div className='w-[80%] mx-auto grid grid-cols-3 gap-5 my-6 '>
            
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
        <a href="#">
          <img
            class="p-8 rounded-t-lg h-80"
            src="/adidas.jpeg"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>

          <div class="flex items-center justify-between mt-4">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
           
          </div>
        </div>
      </div>

     


    
    
    </div>
  )
}

export default UserWishlistProducts
