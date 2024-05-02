import { create } from 'zustand';
import { CartProduct } from '../utils/types';

type ProductStore = {
  quantity: number;
  addedProducts: CartProduct[];
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  setQuantity: (quantityNumber: number) => void;
  addProduct: (product: CartProduct) => void;
};

export const useProductQuantity = create<ProductStore>((set) => ({
  quantity: 1,
  addedProducts: [],
  increaseQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decreaseQuantity: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    })),
  setQuantity: (quantityNumber) => set(() => ({ quantity: quantityNumber })),
  addProduct: (product) =>
    set((state) => ({
      addedProducts: [...state.addedProducts, product],
      quantity: (state.quantity = 1),
    })),
}));
