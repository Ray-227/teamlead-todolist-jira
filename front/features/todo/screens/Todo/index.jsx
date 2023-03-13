import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

import {
  fetchTodoList as fetchTodoListAction,
  filterTodoList as filterTodoListAction,
  completedTodoListItemByID as completedTodoListItemByIDAction,
  uncompletedTodoListItemByID as uncompletedTodoListItemByIDAction,
  removeTodoListItemByID as removeTodoListItemByIDAction,
} from '../../store/actions.js'

import Loader from '@atlaskit/spinner'
import Button from '@atlaskit/button'

import CheckboxIcon from '@atlaskit/icon/glyph/checkbox'
import CheckboxIndeterminateIcon from '@atlaskit/icon/glyph/checkbox-indeterminate'

import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import { TodoHeader } from '../../entities/TodoHeader'


const styles = {
  heading: {
    marginBottom: '10px'
  }
}

const Todo = ({
  todoList,
  todoFilter,
  isFetching,
  isError,
  fetchTodoList,
  filterTodoList,
  completedTodoListItemByID,
  uncompletedTodoListItemByID,
  removeTodoListItemByID,
}) => {
  const [isFilter, setIsFilter] = useState(false)

  const handleCompletedTodo = useCallback(payload => {
    completedTodoListItemByID(payload)
  },[])

  const handleUncompletedTodo = useCallback(payload => {
    uncompletedTodoListItemByID(payload)
  }, [])

  const handleRemoveTodo = useCallback(payload => {
    removeTodoListItemByID({ ...payload, isFilter })
  }, [])

  const handleSubmit = useCallback(payload => {
    fetchTodoList(payload)
  }, [])

  const renderTodo = useCallback(() => {
    if (isFetching) {
      return (
        <Loader interactionName='load' size={'xlarge'} />
      )
    }

    if (isError) {
      return (
        <div>
          <h3>Произошла ошибка!</h3>
          <Button onClick={fetchTodoList} appearance='primary'>Повторить</Button>
        </div>
      )
    }

    return (
      <>
        <Button
          iconBefore={isFilter ? <CheckboxIcon /> : <CheckboxIndeterminateIcon />}
          appearance='default'
          onClick={() => {
            setIsFilter((current) => !current)
            filterTodoList()
          }}
        >
          Только выполненные
        </Button>
        <TodoList
          todoList={isFilter ? todoFilter : todoList}
          handleCompletedTodo={handleCompletedTodo}
          handleUncompletedTodo={handleUncompletedTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      </>
    )
  }, [isFetching, isError, isFilter, todoList, todoFilter])

  return (
    <div>
      <h1 style={styles.heading} >{TodoHeader}</h1>
      <TodoForm handleSubmit={handleSubmit} />
      {!!(todoFilter.length || todoList.length) && renderTodo()}
    </div>
  )
};

const mapStateToProps = state => ({
  todoList: state.todo.todoList,
  todoFilter: state.todo.todoFilter,
  isFetching: state.todo.todoIsFetching,
  isError: state.todo.todoIsError,
})

const mapDispatchToProps = dispatch => ({
  fetchTodoList: payload => {
    dispatch(fetchTodoListAction(payload))
  },
  filterTodoList: () => {
    dispatch(filterTodoListAction())
  },
  completedTodoListItemByID: payload => {
    dispatch(completedTodoListItemByIDAction(payload))
  },
  uncompletedTodoListItemByID: payload => {
    dispatch(uncompletedTodoListItemByIDAction(payload))
  },
  removeTodoListItemByID: payload => {
    dispatch(removeTodoListItemByIDAction(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)