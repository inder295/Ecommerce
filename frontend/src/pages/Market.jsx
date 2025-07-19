import React from 'react'
import Header from '../components/Header'
import ShoppingCart from '../components/ShoppingCart'
import Footer from '../components/Footer'

function Market() {
  return (
    <div className="container mx-auto ">
        <Header/>
        <div className='flex min-h-screen flex-wrap  '>
           
           <div className='w-1/4 p-10'>
               filter section
           </div>

           <div className='w-3/4  '>
                
                 <div className='grid grid-cols-3 gap-2 p-10'>
                    <ShoppingCart/>
                    <ShoppingCart/>
                    <ShoppingCart/>
                    <ShoppingCart/>
                    
                </div>   
           </div>
           
        </div>     

        <Footer/> 
        
      
    </div>
  )
}

export default Market
