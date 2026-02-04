export type TransactionType = 'income' | 'expense';

export type Category = 
  | 'salary'
  | 'food'
  | 'transport'
  | 'entertainment'
  | 'health'
  | 'education'
  | 'housing'
  | 'bills'
  | 'shopping'
  | 'other';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: Category;
  type: TransactionType;
  date: string;
  createdAt: number;
}

export interface TransactionFormData {
  description: string;
  amount: number;
  category: Category;
  type: TransactionType;
  date: string;
}

export interface FinancialSummary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

export interface FilterOptions {
  type: TransactionType | 'all';
  category: Category | 'all';
}
