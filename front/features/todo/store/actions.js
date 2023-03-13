const prefix = 'todo-jira/todo/'

const ACTIONS = {
  FETCH_TODO_LIST: prefix + 'FETCH_TODO_LIST',
  FETCH_TODO_LIST_SUCCESS: prefix + 'FETCH_TODO_LIST_SUCCESS',
  FETCH_TODO_LIST_ERROR: prefix + 'FETCH_TODO_LIST_ERROR',

  FILTER_TODO_LIST: prefix + 'FILTER_TODO_LIST',

  COMPLETED_TODO_LIST_ITEM_BY_ID: prefix + 'COMPLETED_TODO_LIST_ITEM_BY_ID',
  UNCOMPLETED_TODO_LIST_ITEM_BY_ID: prefix + 'UNCOMPLETED_TODO_LIST_ITEM_BY_ID',

  REMOVE_TODO_LIST_ITEM_BY_ID: prefix + 'REMOVE_TODO_LIST_ITEM_BY_ID',
}

export const fetchTodoList = payload => ({
  type: ACTIONS.FETCH_TODO_LIST,
  payload,
})
export const fetchTodoListSuccess = payload => ({
  type: ACTIONS.FETCH_TODO_LIST_SUCCESS,
  payload,
})
export const fetchTodoListError = payload => ({
  type: ACTIONS.FETCH_TODO_LIST_ERROR,
  payload,
})

export const filterTodoList = () => ({
  type: ACTIONS.FILTER_TODO_LIST,
})

export const completedTodoListItemByID = payload => ({
  type: ACTIONS.COMPLETED_TODO_LIST_ITEM_BY_ID,
  payload
})
export const uncompletedTodoListItemByID = payload => ({
  type: ACTIONS.UNCOMPLETED_TODO_LIST_ITEM_BY_ID,
  payload
})

export const removeTodoListItemByID = payload => ({
  type: ACTIONS.REMOVE_TODO_LIST_ITEM_BY_ID,
  payload,
})

export default  ACTIONS