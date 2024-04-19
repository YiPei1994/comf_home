import { productsData } from '../../utils/Data';
import ProductCard from '../../components/ProductCard';
import { MdArrowUpward } from 'react-icons/md';
import Button from '../../components/Button';
import { useState } from 'react';

function Welcome() {
  const [showSlide, setShowSlide] = useState(true);
  return (
    <div
      className={`${showSlide ? 'top-0' : '-top-full'} absolute left-0 z-40 flex  min-h-screen  w-full  flex-col  items-center overflow-hidden bg-neutral-900  transition-all duration-300`}
    >
      <div className="mt-[40px] flex h-full flex-col items-center justify-center gap-[40px] p-4 text-center xl:gap-[100px]">
        <h3 className="text-primary ">Welcome</h3>
        <h2 className="bold bold text-white">
          Find your own piece of <span className="text-purple-200">Art</span>
        </h2>
        <div className="relative my-[20px] flex h-[350px] w-[60%] xl:h-auto xl:w-full xl:gap-16">
          {productsData?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Button
          onClick={() => setShowSlide((d) => !d)}
          className="mt-[8%] bg-transparent xl:mt-0"
          type="button"
        >
          <MdArrowUpward className="text-primary animate-bounce text-4xl" />
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
