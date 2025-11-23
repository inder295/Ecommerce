import React from 'react'
import { Header } from '../../components/Shopfront/Header'
import { Category } from '../../components/Shopfront/Category'
import { OrderDetails } from '../../components/Shopfront/OrderDetails'
import BackNavigation from '../../components/Shopfront/BackNavigation'

export const OrderListPage = () => {
  return (
    <>
      <Header/>
      <Category/>
      <BackNavigation/>
      <OrderDetails/>  
    </>
  )
}

