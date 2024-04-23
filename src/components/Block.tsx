import { ReactNode } from '@tanstack/react-router';
import { cn } from '../utils/cn';

type BlockProps = {
  children: ReactNode;
  className?: string;
};

function Block({ className, children }: BlockProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-6 p-6 md:items-center md:justify-center md:p-12 lg:gap-12 lg:p-16',
        className,
      )}
    >
      {children}
    </section>
  );
}

export default Block;
