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
  content: string;
  method: string;
  payee: string;
  date: Date;
  amount: number;
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

export interface APIService {
  getSummary: () => Promise<GetSummaryResponse>;
  getExpenses: () => Promise<GetExpensesResponse>;
}

export interface SectionItem {
  title: string;
  body: string;
  img: string;
}
