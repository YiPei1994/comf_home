import { Product } from '../utils/types';
import Image from './Image';

type CartItemListProps = {
  products: Product[];
};
function CartItemList({ products }: CartItemListProps) {
  if (products.length === 0) return <p className="text-center">No items</p>;
  return (
    <ul className="flex flex-col gap-4">
      {products.map((product) => (
        <li className=" flex items-center gap-4  bg-white" key={product.id}>
          <div className="flex h-auto w-16 items-center justify-center overflow-hidden">
            <Image src={product.image} alt={product.name} />{' '}
          </div>
          <p>{product.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default CartItemList;
