import AddExpenseModal from '@/components/expenses/add-expense-modal';
import ExpenseTable from '@/components/expenses/expense-table';
import ContainerPadding from '@/components/layouts/container-padding';
import LoaderSpinner from '@/components/shared/loader-spinner';
import PageTitle from '@/components/shared/page-title';
import { Button } from '@/components/ui/button';
import { Expense } from '@/lib/models';
import service from '@/services';
import { CreditCard, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        setIsLoading(true);
        const data = await service.getExpenses();
        console.log('Data', data);
        setExpenses(data.expenses);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchExpenses();
  }, []);

  const PageTitleExpenses = () => (
    <PageTitle
      title='Expenses'
      icon={CreditCard}
      iconColor='text-indigo-500'
      subtitle='Capture your expenses on the go. '
    />
  );

  if (isLoading) {
    return (
      <ContainerPadding>
        <PageTitleExpenses />
        <div className='flex items-center justify-center h-[10rem]'>
          <LoaderSpinner />
        </div>
      </ContainerPadding>
    );
  }

  return (
    <ContainerPadding>
      <div className='relative'>
        <PageTitleExpenses />
        <AddExpenseModal
          trigger={
            <Button className='absolute right-0 top-0 flex gap-2'>
              Add Expense <PlusCircle className='w-5 h-5' />
            </Button>
          }
        />
        <ExpenseTable expenses={expenses} />
      </div>
    </ContainerPadding>
  );
};

export default ExpensesPage;
