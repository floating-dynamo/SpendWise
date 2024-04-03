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
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Expense, PayeeList, PayementMethodList } from '@/lib/models';
import service from '@/services';
import LoaderSpinner from '../shared/loader-spinner';
import { toast } from '../ui/use-toast';

interface AddExpenseModalProps {
  trigger: React.ReactNode;
  payeeList: PayeeList[];
  payementMethodList: PayementMethodList[];
  setRerenderExpenses: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddExpenseModal = ({ trigger, payeeList, payementMethodList, setRerenderExpenses }: AddExpenseModalProps) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [content, setContent] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [payee, setPayee] = useState<string>('');
  const [payementMethod, setPayementMethod] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function resetStates() {
    setContent('');
    setAmount(0);
    setPayee('');
    setPayementMethod('');
  }

  async function addNewExpense() {
    console.log('Adding...');
    const expense: Expense = { amount, content, method: payementMethod, payee, date: new Date() };
    try {
      setIsLoading(true);
      await service.addExpense({ expense });
      resetStates();
      toast({
        title: 'Expense Added Successfully',
        description: new Date().toLocaleString(),
      });
      setOpenDrawer(false);
      setRerenderExpenses((prev) => !prev);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  const disableSubmitButton = !content || !amount || !payee || !payementMethod || isLoading;

  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-2xl tracking-tighter font-bold'>Add a new Expense</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className='flex flex-col gap-3 p-5'>
          <Label htmlFor='content'>Payment For</Label>
          <Input
            id='content'
            placeholder='Enter the content'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <Label htmlFor='amount'>Amount</Label>
          <Input
            id='amount'
            placeholder='Enter the amount in ₹'
            type='number'
            onChange={(e) => setAmount(parseInt(e.target.value) ?? 0)}
            value={amount}
          />
          <div className='flex gap-5 flex-wrap flex-col lg:flex-row mt-3'>
            <div className='flex flex-col gap-3'>
              <Label htmlFor='payee'>Payee</Label>
              <Select value={payee} onValueChange={(selectedPayee) => setPayee(selectedPayee)}>
                <SelectTrigger className='lg:w-[20rem]'>
                  <SelectValue placeholder='Select Payee' />
                </SelectTrigger>
                <SelectContent>
                  {payeeList.map(({ label, value }) => {
                    return <SelectItem value={value}>{label}</SelectItem>;
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col gap-3'>
              <Label htmlFor='payment-method'>Payment Method</Label>
              <Select
                value={payementMethod}
                onValueChange={(selectedPayementMethod) => setPayementMethod(selectedPayementMethod)}
              >
                <SelectTrigger className='lg:w-[20rem]'>
                  <SelectValue placeholder='Select Payement Method' />
                </SelectTrigger>
                <SelectContent>
                  {payementMethodList.map(({ label, value }) => {
                    return <SelectItem value={value}>{label}</SelectItem>;
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button type='submit' onClick={addNewExpense} disabled={disableSubmitButton}>
            {isLoading ? <LoaderSpinner /> : 'Submit'}
          </Button>
          <DrawerClose>
            <Button variant='outline' className='w-full'>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddExpenseModal;
