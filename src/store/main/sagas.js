import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions'
import * as actionTypes from './actionTypes';
import * as Api from '../../services/api';

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchCurrencies(action) {
   try {
      const currencies = yield call(Api.fetchCurrencies);
      yield put(actions.fetchCurrenciesSuccess(currencies));
   } catch (e) {
      yield put({ type: "FETCH_CURRENCIES_FAILED", message: e.message });
   }
}

function* fetchLive(action) {
   try {
      const live = yield call(Api.fetchLive);
      yield put(actions.fetchLiveSuccess(live));
   } catch (e) {
      yield put({ type: "FETCH_LIVE_FAILED", message: e.message });
   }
}

function* fetchConvert(action) {
   try {
      const convert = yield call(Api.fetchConvert);
      yield put(actions.fetchConvertSuccess(convert));
   } catch (e) {
      yield put({ type: "FETCH_CONVERT_FAILED", message: e.message });
   }
}

function* fetchData(action) {
   try {
      const data = yield call(Api.fetchData);
      yield put(actions.fetchDataSuccess(data));
   } catch (e) {
      yield put({ type: "FETCH_DATA_FAILED", message: e.message });
   }
}

function* mainSaga() {
   yield takeEvery(actionTypes.FETCH_CURRENCIES_START, fetchCurrencies);
   yield takeEvery(actionTypes.FETCH_LIVE_START, fetchLive);
   yield takeEvery(actionTypes.FETCH_CONVERT_START, fetchConvert);
   yield takeEvery(actionTypes.FETCH_DATA_START, fetchData);
}

export default mainSaga;