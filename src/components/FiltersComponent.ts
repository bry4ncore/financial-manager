import type { FilterOptions } from '@/types';

export class FiltersComponent {
  private typeFilter: HTMLSelectElement;
  private categoryFilter: HTMLSelectElement;
  private clearButton: HTMLButtonElement;
  private onFilterChangeCallback?: (filters: Partial<FilterOptions>) => void;

  constructor() {
    this.typeFilter = document.getElementById('filter-type') as HTMLSelectElement;
    this.categoryFilter = document.getElementById('filter-category') as HTMLSelectElement;
    this.clearButton = document.getElementById('clear-filters') as HTMLButtonElement;
    
    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    this.typeFilter.addEventListener('change', () => {
      this.handleFilterChange();
    });

    this.categoryFilter.addEventListener('change', () => {
      this.handleFilterChange();
    });

    this.clearButton.addEventListener('click', () => {
      this.clearFilters();
    });
  }

  private handleFilterChange(): void {
    if (this.onFilterChangeCallback) {
      const filters: Partial<FilterOptions> = {
        type: this.typeFilter.value as any,
        category: this.categoryFilter.value as any
      };
      this.onFilterChangeCallback(filters);
    }
  }

  private clearFilters(): void {
    this.typeFilter.value = 'all';
    this.categoryFilter.value = 'all';
    this.handleFilterChange();
  }

  onFilterChange(callback: (filters: Partial<FilterOptions>) => void): void {
    this.onFilterChangeCallback = callback;
  }
}
