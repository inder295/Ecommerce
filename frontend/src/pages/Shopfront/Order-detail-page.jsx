import React from 'react'
import { Header } from '../../components/Shopfront/Header'
import { Category } from '../../components/Shopfront/Category'

export const OrderDetailPage = () => {
  return (
    <>
      <Header/>
      <Category/>
      <h1 className='m-40 font-bold'>Order Details</h1>
    </>
  )
}


