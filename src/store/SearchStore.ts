import { create } from 'zustand';
import { Product } from '../utils/types';

type Search = {
  showSearchInput: boolean;
  searchItem: string | '';
  foundItems: Product[];
  setShowSearchInput: (state?: boolean) => void;
  setSearchItem: (item: string) => void;
  setFoundItems: (items: Product[]) => void;
};

export const useSearch = create<Search>((set) => ({
  showSearchInput: false,
  searchItem: '',
  foundItems: [],
  setShowSearchInput: () =>
    set((state) => ({ showSearchInput: !state.showSearchInput })),
  setSearchItem: (item) => {
    set(() => ({ searchItem: item }));
  },
  setFoundItems: (items) => {
    set(() => ({ foundItems: items }));
  },
}));
