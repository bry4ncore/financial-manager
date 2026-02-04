import type { FinancialSummary } from '@/types';
import { formatCurrency } from '@/utils/helpers';

export class SummaryComponent {
  private elements: {
    totalIncome: HTMLElement;
    totalExpense: HTMLElement;
    balance: HTMLElement;
  };

  constructor() {
    this.elements = {
      totalIncome: document.getElementById('total-income')!,
      totalExpense: document.getElementById('total-expense')!,
      balance: document.getElementById('balance')!
    };
  }

  update(summary: FinancialSummary): void {
    this.elements.totalIncome.textContent = formatCurrency(summary.totalIncome);
    this.elements.totalExpense.textContent = formatCurrency(summary.totalExpense);
    this.elements.balance.textContent = formatCurrency(summary.balance);

    // Update balance color
    this.elements.balance.className = 'amount';
    if (summary.balance > 0) {
      this.elements.balance.classList.add('income');
    } else if (summary.balance < 0) {
      this.elements.balance.classList.add('expense');
    }
  }
}
