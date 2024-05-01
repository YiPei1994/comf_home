import { PropsWithChildren } from 'react';
import Block from '../../components/Block';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { productsData } from '../../utils/Data';
import { shuffleProduct } from '../../utils/helper';
import { Product } from '../../utils/types';

function ProductList({ children }: PropsWithChildren) {
  const selected = shuffleProduct(productsData, 4);
  return (
    <Block>
      {children}
      <div className="flex w-full flex-wrap justify-between gap-4 lg:justify-between lg:gap-8">
        {selected.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Button
        type="button"
        className="bg-side text-darkprimary hover:text-side"
      >
        View colletion
      </Button>
    </Block>
  );
}

export default ProductList;

type ProductProps = {
  product: Product;
};

function ProductItem({ product }: ProductProps) {
  return (
    <div className="mb-10 w-[46%] lg:w-[22%]">
      <div className="mb-4  h-[240px] w-full overflow-hidden md:h-[280px] lg:h-[320px] xl:h-[380px]">
        <Image src={product.image} alt={product.name} />
      </div>
      <div className="text-darkprimary text-left ">
        <p className="mb-2 text-xl">{product.name}</p>
        <p className="text-xl">€ {product.price}</p>
      </div>
    </div>
  );
}
