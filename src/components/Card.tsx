import { LuSprout } from 'react-icons/lu';
import { FaCreditCard } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiCircleCheck } from 'react-icons/ci';

import { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
  icon?: string;
};

export function Card({ title, children, icon }: CardProps) {
  return (
    <section className="bg-side flex flex-col  gap-6 p-8 md:w-[45%] lg:w-[22%]">
      {icon === 'delivery' && (
        <TbTruckDelivery className="text-darkprimary h-8 w-8" />
      )}{' '}
      {icon === 'check' && (
        <CiCircleCheck className="text-darkprimary h-8 w-8" />
      )}{' '}
      {icon === 'card' && <FaCreditCard className="text-darkprimary h-8 w-8" />}{' '}
      {icon === 'sprout' && <LuSprout className="text-darkprimary h-8 w-8" />}{' '}
      <h4>{title}</h4>
      {children}
    </section>
  );
}
