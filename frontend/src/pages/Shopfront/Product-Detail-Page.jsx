import { Footer } from '../../components/Shopfront/Footer';
import { Category } from '../../components/Shopfront/Category';
import { Header } from '../../components/Shopfront/Header';
import { PdpSection } from '../../components/Shopfront/PdpSection';
import { ProductReviews } from '../../components/Shopfront/ProductReviews';
import BackNavigation from '../../components/Shopfront/BackNavigation';

export const ProductDetailPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <BackNavigation />
      <PdpSection />
      <ProductReviews />
      <Footer />
    </div>
  );
};
