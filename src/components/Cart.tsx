import { BsCart3 } from 'react-icons/bs';
import { cn } from '../utils/cn';
import { useCart } from '../store/CartStore';
import CartItemList from './CartItemList';
import Button from './Button';
import { Link } from '@tanstack/react-router';

type CartProps = {
  className?: string;
};

function Cart({ className }: CartProps) {
  const { displayCart, showCart, cartProducts } = useCart();

  return (
    <>
      {' '}
      <div className={cn('', className)}>
        <BsCart3
          onClick={() => showCart()}
          className="cursor-pointer xl:text-xl"
        />
      </div>{' '}
      <div
        className={`${displayCart ? 'z-30 opacity-100' : '-z-10 opacity-0'} bg-side absolute right-1/2 top-16 w-full  max-w-[400px] p-6 transition-all duration-300  max-md:translate-x-[50%]  md:right-10 md:max-w-[380px]`}
      >
        <CartItemList products={cartProducts} />
        <Button
          disabled={cartProducts.length === 0}
          className="my-4 w-full disabled:bg-neutral-100 disabled:text-neutral-400 md:w-full"
        >
          <Link to="/shoppingCart">View cart</Link>
        </Button>
      </div>
    </>
  );
}

export default Cart;
