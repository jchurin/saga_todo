import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import todoReducer from './todo'
import saga from '../sideeffect';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
  middleware: [
    // TODO: Add here your middlewares
    sagaMiddleware
  ]
})

sagaMiddleware.run(saga);