import Block from '../../components/Block';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { useCart } from '../../store/CartStore';

function ShoppingCart() {
  const { cartProducts } = useCart();
  return (
    <Block>
      <h1 className="pb-4 md:pb-8 xl:pb-12">Your shopping cart</h1>
      <section className="w-full">
        <div className="hidden items-center justify-between border-b pb-4 md:flex">
          <p className="w-3/5">Product</p>
          <div className="flex w-2/5 items-center justify-between">
            <p className="w-1/2 text-right">Quantity</p>
            <p className="w-1/2 text-right">Total</p>
          </div>
        </div>

        {cartProducts.map((product) => (
          <div
            className="my-4 flex w-full gap-4 md:my-8 md:justify-between md:gap-8"
            key={product.product.id}
          >
            <div className="w-1/3 md:w-1/5">
              <div>
                <Image src={product.product.image} alt={product.product.name} />
              </div>
            </div>
            <div className="flex w-2/3 flex-col  gap-4 md:w-4/5 md:flex-row md:justify-between">
              <div className="w-full md:w-2/4">
                <h3>{product.product.name}</h3>
                <p className="mt-4 w-4/5 max-md:truncate ">
                  {product.product.desription}
                </p>
              </div>
              <p className="md:w-1/4 md:text-right">{product.quantity}</p>
              <p className="w-full md:w-1/4 md:text-right">
                € {product.product.price}
              </p>
            </div>
          </div>
        ))}
        <div className="flex flex-col  gap-4 border-t pt-4 text-right">
          <h4>
            Subotal €{' '}
            {cartProducts.reduce(
              (acc, item) => acc + item.quantity * item.product.price,
              0,
            )}
          </h4>
          <p>Taxes and shipping are calculated at checkout</p>
          <Button className="w-full md:self-end">Go to checkout</Button>
        </div>
      </section>
    </Block>
  );
}

export default ShoppingCart;
