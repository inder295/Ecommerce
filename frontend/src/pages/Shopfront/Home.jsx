import { Cards } from '../../components/Shopfront/Cards';
import { Category } from '../../components/Shopfront/Category';
import { Corosel } from '../../components/Shopfront/Corosel';
import { Footer } from '../../components/Shopfront/Footer';
import { Header } from '../../components/Shopfront/Header';
import { Hero } from '../../components/Shopfront/Hero';
import { ViewAllButton } from '../../components/Shopfront/ViewAllButton';


export const Home = () => {
  return (
    <>
      <Header />
      <Category />
      <Corosel />
      <Cards />
      <ViewAllButton />
      <Hero />
      <Footer />
    </>
  );
};
