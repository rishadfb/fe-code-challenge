export const getFormattedValue = (currency: string, value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(value).replace(/\D00(?=\D*$)/, '');

export const getTotalConvertedValue = (total: any, current: any) =>
  total + current;
