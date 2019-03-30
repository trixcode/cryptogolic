import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
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
}

const fakeCurrenciesLive = {
   privacy: "https://coinlayer.com/privacy",
   rates: {
      BTC: 4119.660594,
      ETH: 142.620445,
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