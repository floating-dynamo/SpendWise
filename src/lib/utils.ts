import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NavbarItems, PathNames, SectionItem } from './models';
import ExpenseCheck from '@/assets/home/expense_check.svg';
import PiggyBank from '@/assets/home/piggy_bank.svg';
import FinInsights from '@/assets/home/financial_insights.svg';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateNavbarItems() {
  const navbarItems: NavbarItems[] = [
    { title: 'Home', href: PathNames.HOME },
    { title: 'Expenses', href: PathNames.EXPENSES },
    { title: 'Analytics', href: PathNames.ANALYTICS },
  ];
  return navbarItems;
}

export function generateSectionItems() {
  const SECTION_ITEMS: SectionItem[] = [
    {
      title: 'Easy Expense Tracking',
      body: `Capture your expenses on the go. Our app makes it simple to log your spending, whether you're paying with
  cash, card, or digital wallets.`,
      img: ExpenseCheck,
    },
    {
      title: 'Budget Management',
      body: `Take control of your finances with our budgeting tools. Set limits for different categories and track your
      progress towards your savings goals.`,
      img: PiggyBank,
    },
    {
      title: 'Financial Insights',
      body: `Gain a deeper understanding of your money habits. Our app provides clear visualizations and reports to
      help you make informed decisions.`,
      img: FinInsights,
    },
  ];

  return SECTION_ITEMS;
}
