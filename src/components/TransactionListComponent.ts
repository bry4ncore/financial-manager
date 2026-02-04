import type { Transaction } from '@/types';
import { formatCurrency, formatDate, categoryLabels } from '@/utils/helpers';

export class TransactionListComponent {
  private container: HTMLElement;
  private onDeleteCallback?: (id: string) => void;

  constructor() {
    this.container = document.getElementById('transactions-list')!;
  }

  render(transactions: Transaction[]): void {
    if (transactions.length === 0) {
      this.renderEmpty();
      return;
    }

    this.container.innerHTML = transactions
      .map(transaction => this.createTransactionHTML(transaction))
      .join('');

    this.attachDeleteListeners();
  }

  private renderEmpty(): void {
    this.container.innerHTML = `
      <p class="empty-state">Nenhuma transação encontrada.</p>
    `;
  }

  private createTransactionHTML(transaction: Transaction): string {
    const amountClass = transaction.type === 'income' ? 'income' : 'expense';
    const sign = transaction.type === 'income' ? '+' : '-';
    
    return `
      <div class="transaction-item ${transaction.type}" data-id="${transaction.id}">
        <div class="transaction-info">
          <div class="transaction-header">
            <span class="transaction-description">${transaction.description}</span>
            <span class="transaction-category">${categoryLabels[transaction.category]}</span>
          </div>
          <div class="transaction-date">${formatDate(transaction.date)}</div>
        </div>
        <div class="transaction-actions">
          <span class="transaction-amount ${amountClass}">
            ${sign} ${formatCurrency(transaction.amount)}
          </span>
          <button class="btn-delete" data-id="${transaction.id}">Excluir</button>
        </div>
      </div>
    `;
  }

  private attachDeleteListeners(): void {
    const deleteButtons = this.container.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const id = (e.target as HTMLButtonElement).dataset.id;
        if (id && this.onDeleteCallback) {
          this.onDeleteCallback(id);
        }
      });
    });
  }

  onDelete(callback: (id: string) => void): void {
    this.onDeleteCallback = callback;
  }
}
