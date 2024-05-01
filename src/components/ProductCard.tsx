import { useEffect, useState } from 'react';
import { Product } from '../utils/types';
import Image from './Image';

type RotatingProductsProps = {
  products: Product[];
};
function RotatingProducts({ products }: RotatingProductsProps) {
  const [productNumber, setProductNumber] = useState(products[0].id);
  const length = products.length;
  const width = window.innerWidth;

  useEffect(() => {
    if (width < 1650 && length !== 0) {
      const intervalId = setInterval(() => {
        if (productNumber === products[length - 1].id) {
          setProductNumber(products[0].id);
        }
        setProductNumber((n) => {
          const currentIndex = products.findIndex(
            (product) => product.id === n,
          );
          const nextIndex = (currentIndex + 1) % length;

          return products[nextIndex].id;
        });
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [productNumber]);
  if (length === 0) return;
  return (
    <div className="relative my-[20px] flex min-h-[350px] w-[70%] md:min-h-[420px] lg:w-[55%] xl:h-auto xl:w-full xl:gap-16">
      {products.map((product) => (
        <div
          className={`absolute h-full max-h-0 w-full opacity-0 transition-all duration-300 xl:relative ${productNumber === product.id ? 'max-h-auto opacity-100' : ''}  xl:max-h-max xl:opacity-100 xl:odd:-top-10 xl:even:top-10 `}
        >
          <div className="mb-4 h-[380px] w-full overflow-hidden">
            <Image src={product.image} alt={product.name} />
          </div>
          <div className="text-left text-white">
            <p className="mb-2">{product.name}</p>
            <p>€ {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RotatingProducts;
