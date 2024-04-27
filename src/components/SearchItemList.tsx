import { Product } from '../utils/types';
import Image from './Image';

type SearchItemsListProps = {
  products: Product[];
};
function SearchItemsList({ products }: SearchItemsListProps) {
  if (products.length === 0) return <p className="text-center">No items</p>;
  return (
    <ul className="flex flex-col gap-4">
      {products.map((product) => (
        <li className=" flex items-center gap-4  bg-white" key={product.id}>
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden">
            <Image src={product.image} alt={product.name} />{' '}
          </div>
          <p>{product.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchItemsList;
