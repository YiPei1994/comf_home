import { ReactNode, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../utils/cn';
import { Link } from '@tanstack/react-router';

type ButtonProps = {
  type: 'button';
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
  type: 'link';
  className?: string;
  link: string;
  children: ReactNode;
};

const Button = (props: LinkProps | ButtonProps) => {
  const { type, className } = props;

  if (type === 'link') {
    return (
      <Link
        to={props.link}
        className={cn('text-darkprimary px-6 py-3 hover:underline', className)}
        {...props}
      ></Link>
    );
  }
  if (type === 'button')
    return (
      <button
        className={cn(
          'bg-darkprimary hover:bg-primary px-6 py-3 text-white',
          className,
        )}
        {...props}
      ></button>
    );
};

export default Button;
