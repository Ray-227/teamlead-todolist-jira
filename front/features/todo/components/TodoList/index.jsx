import React from 'react'
import TodoItem from '../TodoItem'


const TodoList = ({
  todoList,
  ...props
}) => {

  return (
    todoList && todoList.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        value={todo.name}
        label={todo.name}
        name={todo.id}
        {...props}
      />
    ))
  )
}

export default TodoList