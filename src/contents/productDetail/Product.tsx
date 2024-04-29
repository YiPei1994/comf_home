import BlockWithImage from '../../components/BlockWithImage';
import Image from '../../components/Image';
import { productsData } from '../../utils/Data';

type ProductProps = {
  id: number;
};

function Product({ id }: ProductProps) {
  const product = productsData.find((product) => product.id === id);
  if (!product) return;
  const { image, name, desription, price } = product;
  return (
    <BlockWithImage>
      <div className="w-1/2">
        <Image src={image} alt={name} />
      </div>
    </BlockWithImage>
  );
}

export default Product;
