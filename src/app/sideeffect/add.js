import { call, takeLatest, put } from 'redux-saga/effects';
import { todoActions } from '../data/todo';
import { addNewItem } from '../api'

// function generator
function* onAdd({ payload }) {
  try {
    yield put(todoActions.toggleLoading());    
    // call API method
    const response = yield call(addNewItem, payload);
    yield put(todoActions.pushSuccess(response));
  } catch (error) {
    yield put(todoActions.setError(error));    
  } finally {
    yield put(todoActions.toggleLoading());    
  }
}

export default function* add() {
  yield takeLatest(todoActions.push.type, onAdd);
}