import React from 'react';
import { Header } from '../../components/Shopfront/Header';
import { Category } from '../../components/Shopfront/Category';
import { OrderDetailsById } from '../../components/Shopfront/OrderDetailsById';
import BackNavigation from '../../components/Shopfront/BackNavigation';
import { Footer } from '../../components/Shopfront/Footer';

export const OrderDetailPage = () => {
  return (
    <>
      <Header />
      <Category />
      <BackNavigation />
      <OrderDetailsById />
      <Footer />
    </>
  );
};
