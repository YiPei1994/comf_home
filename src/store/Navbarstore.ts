import { create } from 'zustand';

type Navbar = {
  showNavbar: boolean;
  setShowNavbar: (state?: boolean) => void;
};

export const useNavbar = create<Navbar>((set) => ({
  showNavbar: false,
  setShowNavbar: () => set((state) => ({ showNavbar: !state.showNavbar })),
}));
