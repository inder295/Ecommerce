import React from 'react';
import { Header } from '../../components/Shopfront/Header';
import { Category } from '../../components/Shopfront/Category';
import { UserProfile } from '../../components/Shopfront/UserProfile';
import BackNavigation from '../../components/Shopfront/BackNavigation';

export const Profile = () => {
  return (
    <>
      <Header />
      <Category />
      <BackNavigation />
      <UserProfile />
    </>
  );
};
