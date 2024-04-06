import { APIService } from '@/lib/models';
import { mockGetSummaryResponse } from './mockData/getSummaryResponse.mock';
import { mockGetExpensesResponse } from './mockData/getExpensesResponse.mock';
import { mockPayeeListResponse } from './mockData/getPayeeListResponse.mock';
import { mockPayementMethodListResponse } from './mockData/getmockPayementMethodListResponse.mock';

const mockService: APIService = {
  async getSummary() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockGetSummaryResponse);
      }, 1000);
    });
  },
  async getExpenses() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockGetExpensesResponse);
      }, 1000);
    });
  },
  async getPayeeList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPayeeListResponse);
      }, 1000);
    });
  },
  async getPayementMethodList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPayementMethodListResponse);
      }, 1000);
    });
  },
  async addExpense({ expense }) {
    console.log(expense);
    mockGetExpensesResponse.expenses.unshift(expense);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Expense Added successfully' });
      }, 1000);
    });
  },
  async deleteExpense({ id }) {
    mockGetExpensesResponse.expenses = mockGetExpensesResponse.expenses.filter((expense) => expense.id !== id);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Expense Deleted successfully' });
      }, 1000);
    });
  },
};

export default mockService;
