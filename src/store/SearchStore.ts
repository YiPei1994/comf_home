import { create } from 'zustand';

type Search = {
  showSearchInput: boolean;
  searchItem: string | '';

  setShowSearchInput: (state?: boolean) => void;
  setSearchItem: (item: string) => void;
};

export const useSearch = create<Search>((set) => ({
  showSearchInput: false,
  searchItem: '',

  setShowSearchInput: () =>
    set((state) => ({ showSearchInput: !state.showSearchInput })),
  setSearchItem: (item) => {
    set(() => ({ searchItem: item }));
  },
}));
