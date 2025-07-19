import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const [sidebar,setSidebar]=useState(false)
    return <>
      <div className='h-20 flex justify-between p-5 shadow-md px-20'>
        <Link to="/market" >
            <div className='font-serif font-bold text-3xl font-style: italic cursor-pointer p-2 '>Shopme</div>
        
        </Link>
        
        <div className='flex p-2 space-x-10 text-xl '>
            <Link to="/" >
                <p className='cursor-pointer hover:text-red-600'>About</p>
            </Link>
            
            <Link to="/market" >
                <p className='cursor-pointer hover:text-red-600'>Market</p>
            </Link>
        </div>

        <div className='flex space-x-5'>
            
          
            <img src="cart.jpg" alt="minicart" className='border-1 border-solid rounded-sm cursor-pointer' onClick={()=>setSidebar(true)} />
            <img src="profile.png" alt="profile" className='h-10 pt-0 align-content: center cursor-pointer  '/>
            

        </div>
    </div>

    {sidebar && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
            onClick={() => setSidebar(false)}
          ></div>

          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${sidebar ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button
                onClick={() => setSidebar(false)}
                className="text-lg font-bold cursor-pointer "
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              {/* Example cart items */}
              <p>No items in cart.</p>
            </div>
          </div>
        </>
      )}
   
</>

   
  
}

export default Header
