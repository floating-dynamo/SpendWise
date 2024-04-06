import { GetExpensesResponse } from '@/lib/models';

export const mockGetExpensesResponse: GetExpensesResponse = {
  expenses: [
    {
      id: 'asdasdcj1231sqws',
      content: 'Groceries',
      method: 'credit_card',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-01'),
      amount: 85.32,
    },
    {
      id: 'asdasdcj11231sa',
      content: 'Internet Bill',
      method: 'debit_card',
      payee: 'nirmala_maskeri',
      date: new Date('2024-03-05'),
      amount: 55.0,
    },
    {
      id: '12asdcj1231sqws',
      content: 'Lunch',
      method: 'cash',
      payee: 'nirmala_maskeri',
      date: new Date('2024-03-08'),
      amount: 12.5,
    },
    {
      id: 'aasdas13qws',
      content: 'Electricity Bill',
      method: 'debit_card',
      payee: 'nagraj_maskeri',
      date: new Date('2024-03-12'),
      amount: 75.8,
    },
    {
      id: 'asdasdayhcj1231sqws',
      content: 'Phone Bill',
      method: 'debit_card',
      payee: 'veda_maskeri',
      date: new Date('2024-03-18'),
      amount: 45.99,
    },
    {
      id: 'omdfnsdjwsqws',
      content: 'Dinner',
      method: 'upi',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-21'),
      amount: 65.7,
    },
    {
      id: 'asf1mald231sqws',
      content: 'Fuel',
      method: 'credit_card',
      payee: 'nagraj_maskeri',
      date: new Date('2024-03-25'),
      amount: 40.0,
    },
    {
      id: 'fgt31sqws',
      content: 'Movies',
      method: 'upi',
      payee: 'veda_maskeri',
      date: new Date('2024-03-29'),
      amount: 25.0,
    },
    {
      id: 'asd131cj1231sqws',
      content: 'Shopping',
      method: 'credit_card',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-30'),
      amount: 120.45,
    },
    {
      id: 'asdasfggsqws',
      content: 'Coffee',
      method: 'cash',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-31'),
      amount: 4.75,
    },
  ],
};
