import React from 'react';
import { Header } from '../../components/Shopfront/Header';
import { Category } from '../../components/Shopfront/Category';
import { Footer } from '../../components/Shopfront/Footer';
import { PlpMainSection } from '../../components/Shopfront/PlpMainSection';

export const ProductListPage = () => {
  return (
    <div className="mt-40">
      <Header />
      <Category />
      <PlpMainSection />

      <Footer />
    </div>
  );
};
