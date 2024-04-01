import { APIService } from '@/lib/models';
import { mockGetSummaryResponse } from './mockData/getSummaryResponse.mock';
import { mockGetExpensesResponse } from './mockData/getExpensesResponse.mock';

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
};

export default mockService;
