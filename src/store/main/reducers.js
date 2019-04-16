import {SET_PRIMARY_CURRENCY, FETCH_CURRENCIES_SUCCESS, SEARCH_CURRENCY_BY_NAME, SET_BACKUP_CURRENCIES } from './actionTypes';

const initialState = {
  currencies: {},
  backUpCurrencyes: {},
  primaryCurrencyValue: null,
}
const main = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return Object.assign({}, state, {
        currencies: action.currencies
      })
    case SEARCH_CURRENCY_BY_NAME:
      return Object.assign({}, state, {
        currencies: action.searchedCurrencyes
      })
    case SET_BACKUP_CURRENCIES:
      return Object.assign({}, state, {
        backUpCurrencyes: action.currencies
      })
    case SET_PRIMARY_CURRENCY:
      return Object.assign({}, state, {
        primaryCurrencyValue: action.primaryCurrencyValue
      })
    default:
      return state
  }
}

export default main;