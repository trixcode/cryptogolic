import { FETCH_CURRENCIES_SUCCESS, FETCH_LIVE_SUCCESS, FETCH_CONVERT_SUCCESS, FETCH_DATA_SUCCESS } from "./actionTypes";

const initialState = {
  currencies: {},
  live: {},
  convert: {},
  date: {}
}
const main = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return Object.assign({}, state, {
        currencies: action.currencies
      });
    case FETCH_LIVE_SUCCESS:
      return Object.assign({}, state, {
        live: action.live
      });
    case FETCH_CONVERT_SUCCESS:
      return Object.assign({}, state, {
        convert: action.convert
      });
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state
  }
}

export default main;