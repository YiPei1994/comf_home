import { MdSearch } from 'react-icons/md';
import { cn } from '../utils/cn';
import { useSearch } from '../store/SearchStore';
import { useEffect } from 'react';
import { productsData } from '../utils/Data';

import SearchItemsList from './SearchItemList';

type SearchProps = {
  className?: string;
};

function Search({ className }: SearchProps) {
  const {
    showSearchInput,
    setShowSearchInput,
    searchItem,
    setSearchItem,
    foundItems,
    setFoundItems,
  } = useSearch();
  useEffect(() => {
    const findingItems = () => {
      const searchedItems = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchItem.toLowerCase()),
      );
      setFoundItems(!searchItem ? [] : searchedItems);
    };

    findingItems();
  }, [searchItem]);

  return (
    <>
      {' '}
      <div className={cn('ml-auto md:hidden', className)}>
        <MdSearch onClick={() => setShowSearchInput()} />
      </div>{' '}
      <div
        className={`${showSearchInput ? 'z-30 opacity-100' : '-z-10 opacity-0'} bg-side absolute left-1/2 top-16  w-full max-w-[300px] p-6 transition-all  duration-300 max-md:-translate-x-[50%] md:left-16 md:max-w-[380px]`}
      >
        <input
          className="mb-4 w-full border-b px-4 py-2 outline-none"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        <SearchItemsList products={foundItems} />
      </div>
    </>
  );
}

export default Search;
