import Button from './Button';
import { LuMinus } from 'react-icons/lu';
import { LuPlus } from 'react-icons/lu';
import { useProductQuantity } from '../store/ProductStore';
import { Product } from '../utils/types';
import { useCart } from '../store/CartStore';

type ProductCTAProps = {
  product: Product;
};

function ProductCTA({ product }: ProductCTAProps) {
  const { quantity, increaseQuantity, decreaseQuantity, setQuantity } =
    useProductQuantity();
  const { addToCart, cartProducts, updateCartQuantity } = useCart();
  function handleAdd() {
    if (!product) return;
    const cartProduct = {
      product,
      quantity,
    };
    const exist = cartProducts.find(
      (cartProduct) => cartProduct.product.id === product.id,
    );
    if (exist) {
      updateCartQuantity(quantity, product.id);
    } else {
      addToCart(cartProduct);
    }

    setQuantity(1);
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="bg-side flex items-center justify-center gap-4 py-4 md:w-1/2">
        <LuMinus onClick={decreaseQuantity} />
        <input
          type="text"
          className="w-[50px] bg-transparent text-center outline-none "
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
        />
        <LuPlus onClick={increaseQuantity} />
      </div>
      <Button className="w-full" onClick={handleAdd}>
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCTA;
