import { create } from 'zustand';
import { CartProduct } from '../utils/types';

type CartStore = {
  displayCart: boolean;
  cartProducts: CartProduct[];
  showCart: () => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  addToCart: (product: CartProduct) => void;
  updateCartQuantity: (quantity: number, id: number) => void;
  deleteCartProduct: (id: number) => void;
};

export const useCart = create<CartStore>((set) => ({
  displayCart: false,
  cartProducts: [],
  showCart: () => set((state) => ({ displayCart: !state.displayCart })),
  increaseCartQuantity: (id) =>
    set((state) => ({
      cartProducts: state.cartProducts.map((product) =>
        product.product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    })),
  decreaseCartQuantity: (id) =>
    set((state) => ({
      cartProducts: state.cartProducts.map((product) =>
        product.product.id === id && product.quantity > 0
          ? {
              ...product,
              quantity:
                product.quantity > 1 ? product.quantity - 1 : product.quantity,
            }
          : product,
      ),
    })),
  addToCart: (product) =>
    set((state) => ({
      cartProducts: [...state.cartProducts, product],
    })),
  updateCartQuantity: (quantity, id) =>
    set((state) => ({
      cartProducts: state.cartProducts.map((product) =>
        product.product.id === id && product.quantity > 0
          ? {
              ...product,
              quantity: product.quantity + quantity,
            }
          : product,
      ),
    })),
  deleteCartProduct: (id) =>
    set((state) => ({
      cartProducts: state.cartProducts.filter(
        (product) => product.product.id !== id,
      ),
    })),
}));
