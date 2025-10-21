import React, { } from 'react';
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Lock } from 'lucide-react';
import { Header } from '../../components/Shopfront/Header';
import { Category } from '../../components/Shopfront/Category';
import { Footer } from '../../components/Shopfront/Footer';
import { CartItems } from '../../components/Shopfront/CartItems';
import BackNavigation from '../../components/Shopfront/BackNavigation';

const CartPage = () => {
 
  

  return (
    <>
     <Header/>
     <Category/>
     <BackNavigation/>
     <CartItems/>
      <Footer/>
    </>
  );
};

export default CartPage;
