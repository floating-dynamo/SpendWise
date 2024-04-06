import { LucideIcon } from 'lucide-react';

export interface NavbarItems {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export enum PathNames {
  HOME = '/',
  EXPENSES = '/expenses',
  ANALYTICS = '/analytics',
}

export interface Expense {
  id: string;
  content: string;
  method: string;
  payee: string;
  date: Date;
  amount: number;
}

export interface PayeeList {
  label: string;
  value: string;
}

export interface PayementMethodList {
  label: string;
  value: string;
}

export interface GetSummaryResponse {
  totalExpensesThisMonth: number;
  totalExpensesThisYear: number;
  totalExpensesLastMonth: number;
  totalExpensesLastYear: number;
  mostExpensiveCategoryThisMonth: string;
  mostExpensiveCategoryLastMonth: string;
}

export interface GetExpensesResponse {
  expenses: Expense[];
}

export interface GetPayeeListResponse {
  payeeList: PayeeList[];
}

export interface GetPayementMethodListResponse {
  paymentMethodList: PayementMethodList[];
}

export interface AddExpenseResponse {
  message: string;
}

export interface AddExpensePayload {
  expense: Expense;
}

export interface DeleteExpensePayload {
  id: string;
}

export interface DeleteExpenseResponse extends AddExpenseResponse {}

export interface APIService {
  getSummary: () => Promise<GetSummaryResponse>;
  getExpenses: () => Promise<GetExpensesResponse>;
  getPayeeList: () => Promise<GetPayeeListResponse>;
  getPayementMethodList: () => Promise<GetPayementMethodListResponse>;
  addExpense: ({ expense }: AddExpensePayload) => Promise<AddExpenseResponse>;
  deleteExpense: ({ id }: DeleteExpensePayload) => Promise<DeleteExpenseResponse>;
}

export interface SectionItem {
  title: string;
  body: string;
  img: string;
}
