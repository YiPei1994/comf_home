import Button from './Button';
import { LuMinus } from 'react-icons/lu';
import { LuPlus } from 'react-icons/lu';

function ProductCTA() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="bg-side flex items-center justify-center gap-4 py-4 md:w-1/2">
        <LuMinus />
        <input
          type="number"
          className="w-[30px] bg-transparent text-center"
          defaultValue={1}
        />
        <LuPlus />
      </div>
      <Button className="w-full">Add to cart</Button>
    </div>
  );
}

export default ProductCTA;
