import ACTIONS from './actions'


const initialState = {
  todoList: [],
  todoFilter: [],
  todoIsFetching: false,
  todoIsError: false,
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTIONS.FETCH_TODO_LIST:
      return {
        ...state,
        todoIsFetching: true,
        todoIsError: false,
      }
    case ACTIONS.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        todoList: payload.todoList.map(item => ({ ...item, isCompleted: false })),
        todoIsFetching: false,
        todoIsError: false
      }
    case ACTIONS.FETCH_TODO_LIST_ERROR:
      return {
        ...state,
        todoIsFetching: false,
        todoIsError: true,
      }
    case ACTIONS.FILTER_TODO_LIST:
      return {
        ...state,
        todoFilter: state.todoList.filter(({ isCompleted }) => isCompleted === true)
      }
    case ACTIONS.COMPLETED_TODO_LIST_ITEM_BY_ID:
      const todoCompleted = (() => {
        const todo = state.todoList.find(todo => todo.id === payload.id)
        const todoIndex = state.todoList.findIndex(todo => todo.id === payload.id)
        todo.isCompleted = true

        return { ...todo, index: todoIndex }
      })()
      const todoCompletedSplice = state.todoList.splice(todoCompleted.index, 1)

      return {
        ...state,
        todoList: [...state.todoList, ...todoCompletedSplice],
      }
    case ACTIONS.UNCOMPLETED_TODO_LIST_ITEM_BY_ID:
      const todo = state.todoList.find(todo => todo.id === payload.id)
      todo.isCompleted = false

      const todoFilterIndex = state.todoFilter.findIndex(todo => todo.id === payload.id)
      state.todoFilter.splice(todoFilterIndex, 1)

      return {
        ...state,
        todoList: [...state.todoList],
        todoFilter: [...state.todoFilter],
      }
    case ACTIONS.REMOVE_TODO_LIST_ITEM_BY_ID:
      const todoRemoveIndex = state.todoList.findIndex(todo => todo.id === payload.id)
      state.todoList.splice(todoRemoveIndex, 1)

      const todoFilterRemoveIndex = state.todoFilter.findIndex(todo => todo.id === payload.id)
      state.todoFilter.splice(todoFilterRemoveIndex, 1)

      return {
        ...state,
        todoList: [...state.todoList],
        todoFilter: [...state.todoFilter],
      }
    default:
      return state
  }
}