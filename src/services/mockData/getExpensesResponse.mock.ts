import { GetExpensesResponse } from '@/lib/models';

export const mockGetExpensesResponse: GetExpensesResponse = {
  expenses: [
    {
      content: 'Groceries',
      method: 'Card',
      payee: 'Supermarket A',
      date: new Date('2024-03-01'),
      amount: 85.32,
    },
    {
      content: 'Internet Bill',
      method: 'Direct Debit',
      payee: 'Internet Provider',
      date: new Date('2024-03-05'),
      amount: 55.0,
    },
    {
      content: 'Lunch',
      method: 'Cash',
      payee: 'Cafeteria',
      date: new Date('2024-03-08'),
      amount: 12.5,
    },
    {
      content: 'Electricity Bill',
      method: 'Direct Debit',
      payee: 'Utility Company',
      date: new Date('2024-03-12'),
      amount: 75.8,
    },
    {
      content: 'Phone Bill',
      method: 'Direct Debit',
      payee: 'Phone Provider',
      date: new Date('2024-03-18'),
      amount: 45.99,
    },
    {
      content: 'Dinner',
      method: 'Card',
      payee: 'Restaurant B',
      date: new Date('2024-03-21'),
      amount: 65.7,
    },
    {
      content: 'Fuel',
      method: 'Card',
      payee: 'Gas Station',
      date: new Date('2024-03-25'),
      amount: 40.0,
    },
    {
      content: 'Movies',
      method: 'Card',
      payee: 'Cinema',
      date: new Date('2024-03-29'),
      amount: 25.0,
    },
    {
      content: 'Shopping',
      method: 'Card',
      payee: 'Retail Store',
      date: new Date('2024-03-30'),
      amount: 120.45,
    },
    {
      content: 'Coffee',
      method: 'Cash',
      payee: 'Coffee Shop',
      date: new Date('2024-03-31'),
      amount: 4.75,
    },
  ],
};
