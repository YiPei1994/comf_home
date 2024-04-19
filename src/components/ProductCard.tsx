import { useEffect, useState } from 'react';
import { Product } from '../utils/types';
import { productsData } from '../utils/Data';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const [productNumber, setProductNumber] = useState(1);
  const length = productsData.length;
  const width = window.innerWidth;

  useEffect(() => {
    if (width < 1650) {
      const intervalId = setInterval(() => {
        if (productNumber === length) {
          setProductNumber(1);
        }
        setProductNumber((n) => n + 1);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [productNumber]);

  return (
    <div
      className={`absolute h-full max-h-0 w-full opacity-0 transition-all duration-300 xl:relative ${productNumber === product.id ? 'max-h-auto opacity-100' : ''} ${product.id % 2 === 0 ? 'xl:-top-10' : 'xl:top-10'} xl:max-h-max xl:opacity-100 `}
    >
      <div className="mb-4 h-max w-full">
        <img className="h-auto w-full" src={product.image} alt={product.name} />
      </div>
      <div className="text-left text-white">
        <p className="mb-2">{product.name}</p>
        <p>€ {product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
