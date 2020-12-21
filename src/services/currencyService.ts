import axios from 'axios';
import { CURRENCY_API } from '../config/apiConfig';
import {
  getFormattedValue,
  getTotalConvertedValue,
} from '../helpers/currencyHelper';

export const DEFAULT_CURRENCY = 'USD';

export const getCurrency = async (
  fromValue: number,
  fromCurrency: string,
  toCurrency: string
) => {
  try {
    const response = await axios.get<any>(`${CURRENCY_API}${fromCurrency}`);
    const rate = response.data.rates[toCurrency.toUpperCase()];
    return fromValue * rate;
  } catch (error) {
    console.log('Currency API error: ', error);
  }
};

export const getTotalValue = async (deals: any) => {
  if (deals && deals.length > 0) {
    const convertedValues = await Promise.all(deals.map(getConvertedValue));
    const total = convertedValues.reduce(getTotalConvertedValue, 0);
    return getFormattedValue(DEFAULT_CURRENCY, Number(total));
  } else {
    return '';
  }
};

export const getConvertedValue = async (deal: any) => {
  const { currency, value } = deal;
  if (value.toUpperCase() !== DEFAULT_CURRENCY) {
    const convertedValue = await getCurrency(value, currency, DEFAULT_CURRENCY);
    return Math.round(convertedValue || 0);
  } else {
    return Math.round(value || 0);
  }
};
