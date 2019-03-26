import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as Api from '../../services/api';

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchCurrencies(action) {
   try {
      const currencies = yield call(Api.fetchCurrencies);
      yield put({type: "USER_FETCH_SUCCEEDED", currencies: currencies});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mainSaga() {
  yield takeEvery(actionTypes.FETCH_CURRENCIES_START, fetchCurrencies);
}

export default mainSaga;