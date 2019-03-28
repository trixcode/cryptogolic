import { FETCH_CURRENCIES_START, FETCH_CURRENCIES_SUCCESS, FETCH_LIVE_START, FETCH_LIVE_SUCCESS, FETCH_CONVERT_START, FETCH_CONVERT_SUCCESS, FETCH_DATA_START, FETCH_DATA_SUCCESS } from './actionTypes'

export const fetchCurrenciesStart = () => {
  return {
    type: FETCH_CURRENCIES_START,
  }
};

export const fetchCurrenciesSuccess = (currencies) => {
  return {
    type: FETCH_CURRENCIES_SUCCESS,
    currencies,
  }
};

export const fetchLiveStart = () => {
  return {
    type: FETCH_LIVE_START,
  }
};

export const fetchLiveSuccess = (live) => {
  return {
    type: FETCH_LIVE_SUCCESS,
    live,
  }
};

export const fetchConvertStart = () => {
  return {
    type: FETCH_CONVERT_START,
  }
};

export const fetchConvertSuccess = (convert) => {
  return {
    type: FETCH_CONVERT_SUCCESS,
    convert,
  }
};

export const fetchDataStart = () => {
  return {
    type: FETCH_DATA_START,
  }
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  }
};