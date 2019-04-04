import { FETCH_CURRENCIES_SUCCESS } from './actionTypes';

const initialState = {
  currencies: {},
  live: {}
}
const main = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return Object.assign({}, state, {
        currencies: action.currencies
      })
    default:
      return state
  }
}

export default main;