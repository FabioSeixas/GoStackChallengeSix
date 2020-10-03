const formatValue = (value: string | number): string => {
  const formatedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
  return `${formatedValue}`;
};

export default formatValue;
