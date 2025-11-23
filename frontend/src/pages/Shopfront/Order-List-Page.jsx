import React from 'react'
import { Header } from '../../components/Shopfront/Header'
import { Category } from '../../components/Shopfront/Category'
import { OrderDetails } from '../../components/Shopfront/OrderDetails'

export const OrderListPage = () => {
  return (
    <>
      <Header/>
      <Category/>
      <OrderDetails/>  
    </>
  )
}

