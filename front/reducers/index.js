import { all } from 'redux-saga/effects'

import todoReducer from '../features/todo/store/reducer'
import todoSaga from '../features/todo/store/saga'

export const reducers = {
  todo: todoReducer,
}

export function* rootSagas() {
  yield all([
    todoSaga(),
  ])
}