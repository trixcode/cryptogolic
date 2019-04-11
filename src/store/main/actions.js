import { FETCH_CURRENCIES_START, FETCH_CURRENCIES_SUCCESS, SET_BACKUP_CURRENCIES, SEARCH_CURRENCY_BY_NAME} from './actionTypes'

export const fetchCurrenciesStart = () => {
  return {
  type: FETCH_CURRENCIES_START,
}};
export const fetchCurrenciesSuccess = (currencies) => {
  return {
  type: FETCH_CURRENCIES_SUCCESS,
  currencies,
}};
export const searchCurrencyByName = (searchedCurrencyes) => {
  return {
  type: SEARCH_CURRENCY_BY_NAME,
  searchedCurrencyes,
}};
export const setBackUpCurrencyes = (currencies) => {
  return {
    type: SET_BACKUP_CURRENCIES,
    currencies,
}};
