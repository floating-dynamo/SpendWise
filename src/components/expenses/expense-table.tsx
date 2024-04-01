import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '../ui/badge';
import { Expense } from '@/lib/models';

interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable = ({ expenses }: ExpenseTableProps) => {
  console.log(expenses)
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => {
            return (
              <TableRow className='bg-accent'>
                <TableCell>
                  <div className='font-medium'>{expense.content}</div>
                </TableCell>
                <TableCell className='hidden sm:table-cell'>{expense.method}</TableCell>
                <TableCell className='hidden sm:table-cell'>
                  <Badge className='text-xs' variant='secondary'>
                    {expense.payee}
                  </Badge>
                </TableCell>
                <TableCell className='hidden md:table-cell'>{expense.date.toString()}</TableCell>
                <TableCell className='text-right'>₹{expense.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
