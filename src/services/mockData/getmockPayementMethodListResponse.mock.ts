import { GetPayementMethodListResponse } from '@/lib/models';

export const mockPayementMethodListResponse: GetPayementMethodListResponse = {
  paymentMethodList: [
    { label: 'Credit Card', value: 'credit_card' },
    { label: 'Debit Card', value: 'debit_card' },
    { label: 'Cash', value: 'cash' },
    { label: 'UPI', value: 'upi' },
  ],
};
