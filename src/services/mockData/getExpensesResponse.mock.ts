import { GetExpensesResponse } from '@/lib/models';

export const mockGetExpensesResponse: GetExpensesResponse = {
  expenses: [
    {
      content: 'Groceries',
      method: 'credit_card',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-01'),
      amount: 85.32,
    },
    {
      content: 'Internet Bill',
      method: 'debit_card',
      payee: 'nirmala_maskeri',
      date: new Date('2024-03-05'),
      amount: 55.0,
    },
    {
      content: 'Lunch',
      method: 'cash',
      payee: 'nirmala_maskeri',
      date: new Date('2024-03-08'),
      amount: 12.5,
    },
    {
      content: 'Electricity Bill',
      method: 'debit_card',
      payee: 'nagraj_maskeri',
      date: new Date('2024-03-12'),
      amount: 75.8,
    },
    {
      content: 'Phone Bill',
      method: 'debit_card',
      payee: 'veda_maskeri',
      date: new Date('2024-03-18'),
      amount: 45.99,
    },
    {
      content: 'Dinner',
      method: 'upi',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-21'),
      amount: 65.7,
    },
    {
      content: 'Fuel',
      method: 'credit_card',
      payee: 'nagraj_maskeri',
      date: new Date('2024-03-25'),
      amount: 40.0,
    },
    {
      content: 'Movies',
      method: 'upi',
      payee: 'veda_maskeri',
      date: new Date('2024-03-29'),
      amount: 25.0,
    },
    {
      content: 'Shopping',
      method: 'credit_card',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-30'),
      amount: 120.45,
    },
    {
      content: 'Coffee',
      method: 'cash',
      payee: 'sridhar_maskeri',
      date: new Date('2024-03-31'),
      amount: 4.75,
    },
  ],
};
