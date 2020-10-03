export const formatValue = (value: number): string => {
  Intl.NumberFormat().format(value);
  return 's';
};

export const formatDate = (input: string): string => {
  const [date] = input.split('T');
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
};
