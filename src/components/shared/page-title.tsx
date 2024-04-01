import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  iconColor?: string;
}

const PageTitle = ({ title, icon: Icon, iconColor, subtitle }: PageTitleProps) => {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <p className='text-3xl sm:text-2xl font-bold tracking-[-0.075rem]'>{title}</p>
        {Icon && <Icon className={cn('w-6 h-6', iconColor)} />}
      </div>
      <p className='text-muted-foreground'>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
