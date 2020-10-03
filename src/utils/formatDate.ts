const formatDate = (input: string): string => {
  const [date] = input.split('T');
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
};

export default formatDate;
