import { MdSearch } from 'react-icons/md';
import { cn } from '../utils/cn';
import { useSearch } from '../store/SearchStore';

type SearchProps = {
  className?: string;
};

function Search({ className }: SearchProps) {
  const { showSearchInput, setShowSearchInput, searchItem, setSearchItem } =
    useSearch();
  return (
    <>
      {' '}
      <div className={cn('ml-auto md:hidden', className)}>
        <MdSearch onClick={() => setShowSearchInput()} />
      </div>{' '}
      <div
        className={`${showSearchInput ? 'opacity-100' : 'opacity-0'} bg-side absolute left-1/2 top-16 z-30 w-full max-w-[300px] p-6 transition-all duration-300 max-md:-translate-x-[50%] md:left-16 md:max-w-[380px]`}
      >
        <input
          className="w-full border-b px-4 py-2 outline-none"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
      </div>
    </>
  );
}

export default Search;
