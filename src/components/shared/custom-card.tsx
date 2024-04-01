import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DollarSign, LucideIcon } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

// interface CustomCardProps {
//   title: string;
//   content: React.ReactNode;
//   icon?: LucideIcon;
//   isSkeleton?: boolean;
// }

type CustomCardProps =
  | { title: string; content: React.ReactNode; icon?: LucideIcon; isSkeleton: false }
  | {
      isSkeleton: true;
    };

const CustomCard = (props: CustomCardProps) => {
  if (props.isSkeleton) {
    return (
      <div>
        <Card className='px-2'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              <Skeleton className='h-[1rem] w-[15rem] rounded-xl' />
            </CardTitle>
            <Skeleton className="h-6 w-6 rounded-full"/>
          </CardHeader>
          <CardContent>
            <Skeleton  className='h-[2.5rem] w-[15rem] rounded-xl'/>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { title, content, icon: Icon } = props;

  return (
    <div>
      <Card className='px-2'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>{title}</CardTitle>
          {Icon ? (
            <Icon className='h-4 w-4 text-muted-foreground' />
          ) : (
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          )}
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );
};

export default CustomCard;
