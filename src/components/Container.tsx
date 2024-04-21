import {
  type ReactNode,
  type ElementType,
  ComponentPropsWithoutRef,
} from 'react';
import { cn } from '../utils/cn';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
  className,
  ...props
}: ContainerProps<C>) => {
  const Component = as || 'div';
  return (
    <Component className={cn('h-auto w-full', className)} {...props}>
      {children}
    </Component>
  );
};

export default Container;
