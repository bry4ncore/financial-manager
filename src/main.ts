import './style.css';
import type { Transaction, TransactionFormData } from '@/types';
import { FinancialStore } from '@/utils/store';
import { generateId } from '@/utils/helpers';
import { SummaryComponent } from '@/components/SummaryComponent';
import { TransactionFormComponent } from '@/components/TransactionFormComponent';
import { TransactionListComponent } from '@/components/TransactionListComponent';
import { FiltersComponent } from '@/components/FiltersComponent';

class FinancialManagerApp {
  private store: FinancialStore;
  private summaryComponent: SummaryComponent;
  private formComponent: TransactionFormComponent;
  private listComponent: TransactionListComponent;
  private filtersComponent: FiltersComponent;

  constructor() {
    this.store = new FinancialStore();
    this.summaryComponent = new SummaryComponent();
    this.formComponent = new TransactionFormComponent();
    this.listComponent = new TransactionListComponent();
    this.filtersComponent = new FiltersComponent();

    this.initializeEventHandlers();
    this.subscribeToStoreChanges();
    this.render();
  }

  private initializeEventHandlers(): void {
    // Form submission
    this.formComponent.onSubmit((data: TransactionFormData) => {
      this.handleAddTransaction(data);
    });

    // Transaction deletion
    this.listComponent.onDelete((id: string) => {
      this.handleDeleteTransaction(id);
    });

    // Filters
    this.filtersComponent.onFilterChange((filters) => {
      this.store.setFilters(filters);
    });

    // Clear all button
    const clearAllButton = document.getElementById('clear-all');
    clearAllButton?.addEventListener('click', () => {
      this.handleClearAll();
    });
  }

  private subscribeToStoreChanges(): void {
    this.store.subscribe(() => {
      this.render();
    });
  }

  private handleAddTransaction(formData: TransactionFormData): void {
    const transaction: Transaction = {
      id: generateId(),
      ...formData,
      createdAt: Date.now()
    };

    this.store.addTransaction(transaction);
  }

  private handleDeleteTransaction(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta transação?')) {
      this.store.deleteTransaction(id);
    }
  }

  private handleClearAll(): void {
    this.store.clearAllTransactions();
  }

  private render(): void {
    const summary = this.store.getSummary();
    const transactions = this.store.getFilteredTransactions();

    this.summaryComponent.update(summary);
    this.listComponent.render(transactions);
  }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FinancialManagerApp();
});
