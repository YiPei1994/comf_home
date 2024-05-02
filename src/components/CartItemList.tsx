import { useCart } from '../store/CartStore';
import { CartProduct } from '../utils/types';
import Button from './Button';
import Image from './Image';
import { LuMinus } from 'react-icons/lu';
import { LuPlus } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';

type CartItemListProps = {
  products: CartProduct[];
};
function CartItemList({ products }: CartItemListProps) {
  const { increaseCartQuantity, decreaseCartQuantity, deleteCartProduct } =
    useCart();
  if (products.length === 0) return <p className="text-center">No items</p>;
  return (
    <ul className="flex flex-col gap-4">
      {products.map((product) => (
        <li
          className=" flex items-center justify-between gap-4 bg-white"
          key={product.product.id}
        >
          <div className="flex h-auto w-12 items-center justify-center overflow-hidden">
            <Image src={product.product.image} alt={product.product.name} />{' '}
          </div>
          <div>
            <p>{product.product.name}</p>
            <p>€ {product.product.price * product.quantity}</p>
          </div>
          <div className=" flex items-center gap-4">
            <LuMinus onClick={() => decreaseCartQuantity(product.product.id)} />
            <p>{product.quantity}</p>
            <LuPlus onClick={() => increaseCartQuantity(product.product.id)} />
          </div>

          <MdDelete
            onClick={() => deleteCartProduct(product.product.id)}
            className="mr-4"
          />
        </li>
      ))}
    </ul>
  );
}

export default CartItemList;
