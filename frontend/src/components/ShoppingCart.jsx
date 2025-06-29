import { Link } from 'react-router-dom'

function ShoppingCart() {
  return (
    
<div className="w-fit p-4 m-10 h-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-100">
  <img src="girl.webp" alt="Product" className="w-60 rounded-xl h-60 " />

  <div className="min-w-20 w-fit mt-2 p-1  rounded-2xl  flex   px-10   text-base">
    <p className="p-2 font-bold font-serif">Shirt</p>
    <Link to="/product/name">
        <button className="m-1.5 bg-amber-200 h-7 min-w-[5rem] w-fit rounded-2xl font-serif hover:bg-amber-300">
        $100
        </button>
    
    </Link>
  </div>
</div>


      


        
      
   
  )
}

export default ShoppingCart
