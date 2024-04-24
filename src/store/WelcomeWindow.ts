import { create } from 'zustand';

type WelcomeWindow = {
  show: boolean;
  setShow: (state?: boolean) => void;
};

export const useWelcomeWindow = create<WelcomeWindow>((set) => ({
  show: true,
  setShow: () => set((state) => ({ show: !state.show })),
}));
