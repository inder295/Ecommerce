import { Footer } from '../components/Footer';
import { Category } from '../components/Category';
import { Header } from '../components/Header';
import { PdpSection } from '../components/pdpSection';
import { ProductReviews } from '../components/ProductReviews';

export const ProductDetailPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <PdpSection />
      <ProductReviews />
      <Footer />
    </div>
  );
};
