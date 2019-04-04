import { FETCH_CURRENCIES_START, FETCH_CURRENCIES_SUCCESS} from './actionTypes'

export const fetchCurrenciesStart = () => {
  return {
  type: FETCH_CURRENCIES_START,
}};

export const fetchCurrenciesSuccess = (currencies) => {
  return {
  type: FETCH_CURRENCIES_SUCCESS,
  currencies,
}};
