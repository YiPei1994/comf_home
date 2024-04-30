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
      <div className="h-[300px] w-full">
        <Image src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <h4>Product description</h4>
        <p>{desription}</p>
      </div>
    </BlockWithImage>
  );
}

export default Product;
