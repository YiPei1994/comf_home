import BlockWithImage from '../../components/BlockWithImage';
import Image from '../../components/Image';
import ProductCTA from '../../components/ProductCTA';
import { productsData } from '../../utils/Data';

type ProductProps = {
  id: number;
};

function Product({ id }: ProductProps) {
  const product = productsData.find((product) => product.id === id);
  if (!product) return;
  const { image, name, desription, price, dimesions, traits } = product;
  return (
    <BlockWithImage>
      <div className="h-[380px]  w-full overflow-hidden md:h-full md:w-1/2">
        <Image src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-4 p-6 md:w-1/2 md:justify-evenly md:p-8  lg:p-12 xl:p-16">
        <h2>{name}</h2>
        <h3>€ {price}</h3>

        <h4>Product description</h4>
        <p>{desription}</p>
        <ul className="list-disc pl-8">
          {traits.map((trait, i) => (
            <li key={i}>{trait}</li>
          ))}
        </ul>
        <h4>Dimensions</h4>
        <ul className="flex items-center justify-around">
          {dimesions.map((dimension, i) => (
            <li
              className="flex flex-col border-r px-8 last:border-none"
              key={i}
            >
              <span>{i === 0 ? 'Height' : i === 1 ? 'Width' : 'Depth'}</span>{' '}
              <span>{dimension}</span>
            </li>
          ))}
        </ul>
        <ProductCTA product={product} />
      </div>
    </BlockWithImage>
  );
}

export default Product;
