import React from 'react'
import { Header } from '../components/Header'
import { Category } from '../components/Category'
import { Footer } from '../components/Footer'
import { Filters } from '../components/Filters'
import { AllProducts } from '../components/AllProducts'
import { PlpMainSection } from '../components/PlpMainSection'

export const ProductListPage = () => {
  return (
    <div className='mt-40'>
        <Header/>
        <Category/>
       
        <PlpMainSection/>

        <Footer/>
      
    </div>
  )
}


