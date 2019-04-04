import {  put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as Api from '../../services/api';

const fakeCurrencies = {
   BTC: {
      icon_url: "https://assets.coinlayer.com/icons/BTC.png",
      max_supply: 21000000,
      name: "Bitcoin",
      name_full: "Bitcoin (BTC)",
      symbol: "BTC",
   },
   ETH: {
      icon_url: "https://assets.coinlayer.com/icons/ETH.png",
      max_supply: 0,
      name: "Ethereum",
      name_full: "Ethereum (ETH)",
      symbol: "ETH",
   },
   ABC: {
      symbol: "ABC",
      name: "AB-Chain",
      name_full: "AB-Chain (ABC)",
      max_supply: 210000000,
      icon_url: "https://assets.coinlayer.com/icons/ABC.png"
  },
   611: {
      symbol: "611",
      name: "SixEleven",
      name_full: "SixEleven (611)",
      max_supply: 611000,
      icon_url: "https://assets.coinlayer.com/icons/611.png"
},
   ACP: {
      symbol: "ACP",
      name: "Anarchists Prime",
      name_full: "Anarchists Prime (ACP)",
      max_supply: 53760000,
      icon_url: "https://assets.coinlayer.com/icons/ACP.png"
   },
}

const fakeCurrenciesLive = {
   privacy: "https://coinlayer.com/privacy",
   rates: {
      BTC: 4119.660594,
      ETH: 142.620445,
      611: 0.389165,
      ABC: 59.99,
      ACP: 0.014931,
   },
   success: true,
   target: "USD",
   terms: "https://coinlayer.com/terms",
   timestamp: 1553950812,
}

const fakeCurrenciesHistorical = {
   rates: {
      BTC: 4125.483815,
      ETH: 143.335275,
      611: 0.389165,
      ABC: 59.99,
      ACP: 0.014931,
   }
}

const mergeObjects = () => {
   Object.keys(fakeCurrencies).map(key => {
      console.log('asdad')
      const change = fakeCurrenciesLive.rates[key] - fakeCurrenciesHistorical.rates[key];
      fakeCurrencies[key].rates = (fakeCurrenciesLive.rates[key]).toFixed(2);
      fakeCurrencies[key].change = change
      fakeCurrencies[key].change_pct = (change * 100 / fakeCurrenciesLive.rates[key]).toFixed(2)
   })
   return fakeCurrencies
}

function* fetchCurrencies(action) {
   try {
      // const currencies = yield call(Api.fetchCurrencies);
      // const currenciesLive = yield call(Api.fetchCurrenciesLive)
      // const currenciesHistorical = yield call(Api.fetchCurrenciesHistorical)
      const currencies = mergeObjects();
      console.log('currencies', currencies)
      yield put(actions.fetchCurrenciesSuccess(currencies));
   } catch (e) {
      yield put({type: "FETCH_CURRENCIES_FAILED", message: e.message});
   }
}

function* mainSaga() {
   yield takeEvery(actionTypes.FETCH_CURRENCIES_START, fetchCurrencies);
}

export default mainSaga;