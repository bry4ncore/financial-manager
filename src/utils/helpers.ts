export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function getTodayDate(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export const categoryLabels: Record<string, string> = {
  salary: 'Salário',
  food: 'Alimentação',
  transport: 'Transporte',
  entertainment: 'Lazer',
  health: 'Saúde',
  education: 'Educação',
  housing: 'Moradia',
  bills: 'Contas',
  shopping: 'Compras',
  other: 'Outros'
};
