import { all, call, put, takeLatest, delay } from 'redux-saga/effects'
import { fetchTodoListRequest } from '../gateway/TodoGateway.js'
import ACTIONS, {
  fetchTodoListSuccess,
  fetchTodoListError,
} from './actions.js'


function* fetchTodoListWorker({ payload: filter }) {
  yield delay(1000); // TODO: Убрать
  try {
    const todoList = yield call(fetchTodoListRequest, { ...filter })
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
