import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '../ui/badge';
import { Expense, PayeeList, PayementMethodList } from '@/lib/models';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import DeleteExpenseModal from './delete-expense-modal';
import ContainerPadding from '../layouts/container-padding';
import noExpenseImg from '@/assets/expenses/no_expense.svg';

interface ExpenseTableProps {
  expenses: Expense[];
  payeeList: PayeeList[];
  payementMethodList: PayementMethodList[];
  setRerenderExpenses: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpenseTable = ({ expenses, payeeList, payementMethodList, setRerenderExpenses }: ExpenseTableProps) => {
  if (!expenses.length) {
    return (
      <ContainerPadding>
        <div className='flex items-center justify-center flex-col gap-10'>
          <p className='font-bold text-xl md:text-2xl'>No Expenses Added, add one for it to show here.</p>
          <img src={noExpenseImg} alt='No Expense' className='w-48' />
        </div>
      </ContainerPadding>
    );
  }

  const defaultLabelValue = 'Not Provided';
  return (
    <div className='py-5'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payment Info</TableHead>
            <TableHead className='hidden sm:table-cell'>Method</TableHead>
            <TableHead className='hidden sm:table-cell'>Payee</TableHead>
            <TableHead className='hidden md:table-cell'>Date</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
            <TableHead className='text-center'>Delete Expense</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => {
            return (
              <TableRow className='bg-accent'>
                <TableCell>
                  <div className='font-medium'>{expense.content}</div>
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  {payementMethodList.find((method) => method.value === expense.method)?.label ?? defaultLabelValue}
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  <Badge className='text-xs' variant='secondary'>
                    {payeeList.find((payee) => payee.value === expense.payee)?.label ?? defaultLabelValue}
                  </Badge>
                </TableCell>
                <TableCell className='hidden md:table-cell'>{expense.date.toDateString()}</TableCell>
                <TableCell className='text-right'>₹{expense.amount}</TableCell>
                <TableCell className='text-center'>
                  <DeleteExpenseModal
                    trigger={
                      <Button size='icon' className='hover:bg-red-500 hover:text-slate-100' variant='outline'>
                        <Trash className='w-4 h-4' />
                      </Button>
                    }
                    id={expense.id}
                    setRerenderExpenses={setRerenderExpenses}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
