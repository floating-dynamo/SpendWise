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
import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface AddExpenseModalProps {
  trigger: React.ReactNode;
}

const AddExpenseModal = ({ trigger }: AddExpenseModalProps) => {
  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-2xl tracking-tighter font-bold'>Add a new Expense</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className='flex flex-col gap-3 p-5'>
          <Label htmlFor='content'>Payment For</Label>
          <Input id='content' placeholder='Enter the content' />
          <Label htmlFor='payee'>Payee</Label>
          <Input id='payee' placeholder='Enter the payee name' />
          <Label htmlFor='amount'>Amount</Label>
          <Input id='amount' placeholder='Enter the amount in ₹' type='number' />
          <Label htmlFor='payment-method'>Payment Method</Label>
          <Input id='payment-method' placeholder='Enter the payment method' type='number' />
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant='outline' className='w-full'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddExpenseModal;
