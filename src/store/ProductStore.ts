import { create } from 'zustand';

type ProductStore = {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  setQuantity: (quantityNumber: number) => void;
};

export const useProductQuantity = create<ProductStore>((set) => ({
  quantity: 1,
  increaseQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decreaseQuantity: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    })),
  setQuantity: (quantityNumber) => set(() => ({ quantity: quantityNumber })),
}));
