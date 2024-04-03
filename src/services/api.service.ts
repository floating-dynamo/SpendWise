// apiService.js
import { APIService } from '@/lib/models';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const apiService: APIService = {
  async getSummary() {
    try {
      const response = await axiosInstance.get('/summary');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching summary: ${(error as Error).stack}`);
    }
  },
  async getExpenses() {
    try {
      const response = await axiosInstance.get('/expenses');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching expenses: ${(error as Error).stack}`);
    }
  },
  async getPayeeList() {
    try {
      const response = await axiosInstance.get('/payeeList');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Payee List: ${(error as Error).stack}`);
    }
  },
  async getPayementMethodList() {
    try {
      const response = await axiosInstance.get('/payementMethodList');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Payee List: ${(error as Error).stack}`);
    }
  },
  async addExpense({ expense }) {
    try {
      const response = await axiosInstance.post('/addExpense', expense);
      return response.data;
    } catch (error) {
      throw new Error(`Error while adding the Expense: ${(error as Error).stack}`);
    }
  },
};

export default apiService;
