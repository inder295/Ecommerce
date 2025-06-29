import React from 'react'
import Header from '../components/Header'
import ShoppingCart from '../components/ShoppingCart'
import Footer from '../components/Footer'

function Market() {
  return (
    <div className="container min-h-screen mx-auto ">
        <Header/>
        <div className='flex items-center min-h-screen flex-wrap p-10'>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
            <ShoppingCart/>
           
           
        </div>     

        <Footer/> 
        
      
    </div>
  )
}

export default Market
