import { call, takeLatest, put } from 'redux-saga/effects';
import { todoActions } from '../data/todo';
import { fetchList as fetchListAPI } from '../api'

// function generator
function* onFetchList({ payload }) {
  try {
    yield put(todoActions.toggleLoading());    
    // call API method
    const list = yield call(fetchListAPI);
    yield put(todoActions.setListSuccess(payload || list));
  } catch (error) {
    yield put(todoActions.setError(error));    
  } finally {
    yield put(todoActions.toggleLoading());    
  }
}

export default function* fetchList() {
  yield takeLatest(todoActions.setList.type, onFetchList);
}