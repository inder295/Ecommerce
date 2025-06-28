import React from 'react'
import Search from './Search'

function Header() {
  return <>
      <div className='h-20 flex justify-between p-5 shadow-md px-20'>
        <div className='font-serif font-bold text-3xl font-style: italic cursor-pointer p-2 '>Shopme</div>
        
        <div className='flex p-2 space-x-10 text-xl '>
            <p className='cursor-pointer hover:text-red-600'>About</p>
            <p className='cursor-pointer hover:text-red-600'>Market</p>
        </div>

        <div className='flex space-x-5'>
            
          
            <img src="cart.jpg" alt="cart" className='border-1 border-solid rounded-sm cursor-pointer' />
            <img src="profile.png" alt="profile" className='h-10 pt-0 align-content: center cursor-pointer ' />
            

        </div>
    </div>
   
</>

   
  
}

export default Header
