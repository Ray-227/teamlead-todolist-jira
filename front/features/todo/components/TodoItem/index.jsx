import React, { useCallback, useState } from 'react'

import { Checkbox } from '@atlaskit/checkbox'
import Button from '@atlaskit/button';
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove'

// У меня не вышло применить стили импортированные из файла, поэтому я определил их здесь.
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#c1dcff',
    margin: '12px 0',
    padding: '5px 20px',
    borderRadius: '3px',
    textAlign: 'left,',

    userSelect: 'none',

    width: '550px',
  },
  completed: {
    backgroundColor: '#4c9bff',
  }
}
const TodoItem = ({
  id,
  label,
  value,
  name,
  handleCompletedTodo,
  handleUncompletedTodo,
  handleRemoveTodo,
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleClickTodo = useCallback((e) => {
    e.preventDefault()

    if (isChecked) {
      handleUncompletedTodo({ id })
    } else {
      handleCompletedTodo({ id })
    }

    setIsChecked((current) => !current)
  }, [isChecked])


  return (
    <div
      style={isChecked ? { ...styles.wrapper, ...styles.completed } : styles.wrapper}
      onClick={handleClickTodo}
    >
      <Checkbox
        id={id}
        isChecked={isChecked}
        label={label}
        value={value}
        name={name}
        size='large'
      />
      <Button
        iconBefore={<EditorRemoveIcon />}
        appearance='default'
        onClick={(e) => {
          e.stopPropagation()
          handleRemoveTodo({ id })
        }}
      />
    </div>
  )
}

export default TodoItem