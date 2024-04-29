import { createFileRoute } from '@tanstack/react-router';
import Product from '../../contents/productDetail/Product';

export const Route = createFileRoute('/products/$productid')({
  component: () => <ProductDetail />,
});

function ProductDetail() {
  const { productid } = Route.useParams();
  return (
    <div>
      <Product id={+productid} />
    </div>
  );
}

export default ProductDetail;
