export const formatValue = (value: string | number): string => {
  const formatedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
  return `${formatedValue}`;
};

export const formatDate = (input: string): string => {
  const [date] = input.split('T');
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
};
