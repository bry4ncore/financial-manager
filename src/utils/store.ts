import type { Transaction, FinancialSummary, FilterOptions } from '@/types';

export class FinancialStore {
  private transactions: Transaction[] = [];
  private filters: FilterOptions = { type: 'all', category: 'all' };
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadFromLocalStorage();
  }

  // Subscribe to changes
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    this.listeners.forEach(listener => listener());
  }

  // Local Storage
  private loadFromLocalStorage(): void {
    try {
      const data = localStorage.getItem('financial-transactions');
      if (data) {
        this.transactions = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem('financial-transactions', JSON.stringify(this.transactions));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  // Transaction Management
  addTransaction(transaction: Transaction): void {
    this.transactions.unshift(transaction);
    this.saveToLocalStorage();
    this.notify();
  }

  deleteTransaction(id: string): void {
    this.transactions = this.transactions.filter(t => t.id !== id);
    this.saveToLocalStorage();
    this.notify();
  }

  clearAllTransactions(): void {
    if (confirm('Tem certeza que deseja excluir todas as transações?')) {
      this.transactions = [];
      this.saveToLocalStorage();
      this.notify();
    }
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  // Filters
  setFilters(filters: Partial<FilterOptions>): void {
    this.filters = { ...this.filters, ...filters };
    this.notify();
  }

  getFilters(): FilterOptions {
    return this.filters;
  }

  getFilteredTransactions(): Transaction[] {
    return this.transactions.filter(transaction => {
      const matchesType = this.filters.type === 'all' || transaction.type === this.filters.type;
      const matchesCategory = this.filters.category === 'all' || transaction.category === this.filters.category;
      return matchesType && matchesCategory;
    });
  }

  // Summary Calculations
  getSummary(): FinancialSummary {
    const filtered = this.getFilteredTransactions();
    
    const totalIncome = filtered
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpense = filtered
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const balance = totalIncome - totalExpense;

    return { totalIncome, totalExpense, balance };
  }
}
