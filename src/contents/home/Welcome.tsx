import { productsData } from '../../utils/Data';
import ProductCard from '../../components/ProductCard';
import { MdArrowUpward } from 'react-icons/md';
import Button from '../../components/Button';
import { useState } from 'react';
import { shuffleProduct } from '../../utils/helper';

function Welcome() {
  const [showSlide, setShowSlide] = useState(true);
  const products = shuffleProduct(productsData, 5);
  return (
    <div
      className={`${showSlide ? 'top-0' : '-top-full'} absolute left-0 z-40 flex  h-screen  w-full  flex-col items-center justify-center overflow-hidden bg-neutral-900  transition-all duration-300`}
    >
      <div className="flex h-full flex-col items-center justify-center gap-6 px-4 py-[40px] text-center xl:gap-12 xl:py-[80px]">
        <h3 className="text-primary ">Welcome</h3>
        <h2 className="bold bold text-white">
          Find your own piece of <span className="text-purple-200">Art</span>
        </h2>
        <div className="relative my-[20px] flex min-h-[350px] w-[70%] md:min-h-[420px] lg:w-[55%] xl:h-auto xl:w-full xl:gap-16">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Button
          onClick={() => setShowSlide((d) => !d)}
          className="mt-[50px] bg-transparent lg:mt-[30px] xl:mt-0"
          type="button"
        >
          <MdArrowUpward className="text-primary animate-bounce text-4xl" />
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
