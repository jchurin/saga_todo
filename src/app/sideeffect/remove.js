import { call, takeLatest, put } from 'redux-saga/effects';
import { todoActions } from '../data/todo';
import { remove as removeAPI } from '../api'

// function generator
function* onRemove({ payload }) {
  try {
    yield put(todoActions.toggleLoading());    
    // call API method
    yield call(removeAPI, payload);
    yield put(todoActions.removeSuccess(payload));
  } catch (error) {
    yield put(todoActions.setError(error));    
  } finally {
    yield put(todoActions.toggleLoading());    
  }
}

export default function* remove() {
  yield takeLatest(todoActions.remove.type, onRemove);
}