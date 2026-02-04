import type { TransactionFormData } from '@/types';
import { getTodayDate } from '@/utils/helpers';

export class TransactionFormComponent {
  private form: HTMLFormElement;
  private onSubmitCallback?: (data: TransactionFormData) => void;

  constructor() {
    this.form = document.getElementById('transaction-form') as HTMLFormElement;
    this.initializeDate();
    this.attachEventListeners();
  }

  private initializeDate(): void {
    const dateInput = document.getElementById('date') as HTMLInputElement;
    dateInput.value = getTodayDate();
  }

  private attachEventListeners(): void {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  private handleSubmit(): void {
    const formData = this.getFormData();
    if (formData && this.onSubmitCallback) {
      this.onSubmitCallback(formData);
      this.form.reset();
      this.initializeDate();
    }
  }

  private getFormData(): TransactionFormData | null {
    const description = (document.getElementById('description') as HTMLInputElement).value.trim();
    const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
    const category = (document.getElementById('category') as HTMLSelectElement).value as any;
    const type = (document.getElementById('type') as HTMLSelectElement).value as any;
    const date = (document.getElementById('date') as HTMLInputElement).value;

    if (!description || isNaN(amount) || amount <= 0 || !category || !type || !date) {
      alert('Por favor, preencha todos os campos corretamente.');
      return null;
    }

    return { description, amount, category, type, date };
  }

  onSubmit(callback: (data: TransactionFormData) => void): void {
    this.onSubmitCallback = callback;
  }
}
