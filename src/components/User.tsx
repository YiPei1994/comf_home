import { LuUserCircle2 } from 'react-icons/lu';
import { cn } from '../utils/cn';

type UserProps = {
  className?: string;
};
function User({ className }: UserProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <LuUserCircle2 className="xl:text-xl" />
    </div>
  );
}

export default User;
