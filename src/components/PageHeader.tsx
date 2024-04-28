import { PropsWithChildren } from 'react';

function PageHeader({ children }: PropsWithChildren) {
  return (
    <div className="p-6 md:mx-auto md:w-4/5 md:pb-16 md:text-center xl:p-16">
      {children}
    </div>
  );
}

export default PageHeader;
