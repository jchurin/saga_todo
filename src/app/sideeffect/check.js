import { call, takeLatest, put } from 'redux-saga/effects';
import { todoActions } from '../data/todo';
import { toggleCheck as toggleCheckAPI } from '../api'

// function generator
function* onCheck({ payload }) {
  try {
    yield put(todoActions.toggleLoading());    
    // call API method
    yield call(toggleCheckAPI, payload);
    yield put(todoActions.toggleCheckSuccess(payload));
  } catch (error) {
    yield put(todoActions.setError(error));    
  } finally {
    yield put(todoActions.toggleLoading());    
  }
}

export default function* check() {
  yield takeLatest(todoActions.toggleCheck.type, onCheck);
}