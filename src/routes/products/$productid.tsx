import { createFileRoute } from '@tanstack/react-router';
import Product from '../../contents/productDetail/Product';
import ProductList from '../../contents/home/ProductList';
import Features from '../../contents/home/Features';
import Contact from '../../contents/home/Contact';

export const Route = createFileRoute('/products/$productid')({
  component: () => <ProductDetail />,
});

function ProductDetail() {
  const { productid } = Route.useParams();
  return (
    <div>
      <Product id={+productid} />

      <ProductList>
        <h2>You may also like</h2>
      </ProductList>
      <Features />
      <Contact />
    </div>
  );
}

export default ProductDetail;
