import React from 'react';
import { Header } from '../../components/Shopfront/Header';
import { Footer } from '../../components/Shopfront/Footer';
import AboutHero from '../../components/Shopfront/AboutHero';
import AboutUs from '../../components/Shopfront/AboutUs';
import Feature from '../../components/Shopfront/Feature';
import Testimonial from '../../components/Shopfront/Testimonial';
import Faq from '../../components/Shopfront/Faq';

const About = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutUs />
      <Feature />
      <Testimonial />
      <Faq />

      <Footer />
    </>
  );
};

export default About;
