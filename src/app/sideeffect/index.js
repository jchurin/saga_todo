import { all, fork } from "redux-saga/effects";
import fetchList from './fetch';
import checkItem from './check';
import remove from './remove';
import add from './add';

export default function* sagas() {
  try {
    yield all([fork(fetchList), fork(checkItem), fork(remove), fork(add)])
  } catch (error) {
    console.error('Error loading sagas', error);
  }
}