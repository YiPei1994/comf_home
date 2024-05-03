import { createFileRoute } from '@tanstack/react-router';
import ShoppingCart from '../contents/ShoppingCart/ShoppingCart';

export const Route = createFileRoute('/shoppingCart')({
  component: () => <ShoppingCart />,
});
