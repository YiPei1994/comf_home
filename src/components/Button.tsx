import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../utils/cn';

type ButtonProps = {
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-darkprimary hover:bg-primary text-side px-6 py-4  transition-all duration-300 md:w-fit',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
