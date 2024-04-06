import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import service from '@/services';
import LoaderSpinner from '../shared/loader-spinner';
import { toast } from '../ui/use-toast';

interface DeleteExpenseModalProps {
  trigger: React.ReactNode;
  id: string;
  setRerenderExpenses: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteExpenseModal = ({ trigger, id, setRerenderExpenses }: DeleteExpenseModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const removeExpense = async () => {
    try {
      setIsLoading(true);
      await service.deleteExpense({ id });
      setOpenDrawer(false);
      setRerenderExpenses((prev) => !prev);
      toast({
        title: 'Expense Deleted Successfully',
        description: new Date().toLocaleString(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const disableSubmitButton = isLoading;

  return (
    <div>
      <Dialog open={openDrawer} onOpenChange={setOpenDrawer}>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the expense.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type='submit' onClick={removeExpense} disabled={disableSubmitButton}>
              {isLoading ? <LoaderSpinner /> : 'Confirm'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteExpenseModal;
