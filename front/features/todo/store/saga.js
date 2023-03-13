import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchTodoListRequest } from '../gateway/TodoGateway.js'
import ACTIONS, {
  fetchTodoListSuccess,
  fetchTodoListError,
} from './actions.js'


function* fetchTodoListWorker({ payload }) {
  try {
    const todoList = yield call(fetchTodoListRequest, payload)
    console.log(`LOG: todoList`, todoList)
    yield put(fetchTodoListSuccess({ todoList }))
  } catch (error) {
    yield put(fetchTodoListError({ error: error.message }))
  }
}

function* fetchTodoListWatcher() {
  yield takeLatest(ACTIONS.FETCH_TODO_LIST, fetchTodoListWorker)
}

export default function* saga() {
  yield all([
    call(fetchTodoListWatcher),
  ])
}
