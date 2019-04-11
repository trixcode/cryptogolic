import { FETCH_CURRENCIES_SUCCESS, SEARCH_CURRENCY_BY_NAME, SET_BACKUP_CURRENCIES } from './actionTypes';

const initialState = {
  currencies: {},
  backUpCurrencyes: {},
  live: {}
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
    default:
      return state
  }
}

export default main;