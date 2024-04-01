import { cn, generateNavbarItems } from '@/lib/utils';
import { BadgeDollarSign, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { PathNames } from '@/lib/models';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full flex items-center justify-between p-5 border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex items-center gap-3'>
        <BadgeDollarSign className='w-6 h-6 text-green-500' />
        <Link className='font-bold text-xl' to={PathNames.HOME}>
          SpendWise
        </Link>
      </div>
      <MainNavbar />
      <MobileNavbar />
    </div>
  );
};

const MainNavbar = () => {
  const location = useLocation();
  return (
    <div className='hidden md:flex items-center justify-center gap-5'>
      {generateNavbarItems().map(({ href, title, icon: Icon }, index) => (
        <Link to={href} key={index}>
          {Icon && <Icon className='w-5 h-5' />}
          <p className={cn(location.pathname === href && 'text-green-500 font-semibold')}>{title}</p>
        </Link>
      ))}
      <ModeToggle />
    </div>
  );
};

const MobileNavbar = () => {
  const location = useLocation();
  return (
    <div className='md:hidden flex gap-5'>
      <ModeToggle />
      <Drawer>
        <DrawerTrigger>
          <Button variant={'outline'} size='icon'>
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerDescription>
              <BadgeDollarSign className='w-6 h-6 text-green-500 mx-auto' />
            </DrawerDescription>
            <DrawerTitle className='text-2xl tracking-tighter font-bold'>Spendwise</DrawerTitle>
          </DrawerHeader>
          <div className='flex items-center justify-center flex-col gap-5 mt-5'>
            {generateNavbarItems().map(({ href, title, icon: Icon }, index) => (
              <Link to={href} key={index}>
                <DrawerClose>
                  {Icon && <Icon className='w-5 h-5' />}
                  <p className={cn(location.pathname === href && 'text-green-500 font-semibold')}>{title}</p>
                </DrawerClose>
              </Link>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button className='w-full'>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
