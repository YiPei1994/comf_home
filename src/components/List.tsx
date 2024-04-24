import { Link } from '@tanstack/react-router';
import { ProdcutLink } from '../utils/types';
import { ReactNode } from 'react';

type ListProps = {
  lists: ProdcutLink[];
  children: ReactNode;
};
function List({ lists, children }: ListProps) {
  return (
    <div className="text-side flex w-1/2 flex-col gap-4 py-4 xl:pt-0">
      {children}
      <ul className="text-side xl:flex xl:flex-col xl:gap-2">
        {lists.map((list) => (
          <li key={list.id}>
            <Link to={list.to}>{list.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
