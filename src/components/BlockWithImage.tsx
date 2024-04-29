import { ReactNode } from 'react';
import { cn } from '../utils/cn';

type BlockWithImageProps = {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
};

function BlockWithImage({
  children,
  reverse = false,
  className,
}: BlockWithImageProps) {
  return (
    <div
      className={cn(
        `${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex w-full flex-col md:items-stretch`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default BlockWithImage;
