import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'
import { reducers, rootSagas } from '../reducers'


const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(sagaMiddleware),
    ),
  )

  sagaMiddleware.run(rootSagas)

  return { store }
}