import React from 'react'

import ButtonGroup from '@atlaskit/button/button-group'
import LoadingButton from '@atlaskit/button/loading-button'
import TextField from '@atlaskit/textfield'

import Form, { Field as FieldForm, FormFooter } from '@atlaskit/form'

const Field = ({ name, label }) => (
  <FieldForm
    aria-required={true}
    name={name}
    defaultValue=''
    label={label}
    isRequired
  >
    {({ fieldProps, error, valid }) => <TextField {...fieldProps} />}
  </FieldForm>
)

const TodoForm = ({ handleSubmit }) => (
  <div
    style={{
      display: 'flex',
      width: '400px',
      maxWidth: '100%',
      margin: '0 auto',
      flexDirection: 'column',
      textAlign: 'left',
      marginBottom: '20px',
    }}
  >
    <Form
    onSubmit={(data) => handleSubmit(data)}
    >
    {({ formProps, submitting }) => (
      <form {...formProps}>
        <Field name={'project'} label={'Проект'} />
        <Field name={'todo-count'} label={'Количество задач'} />
        <FormFooter>
          <ButtonGroup>
            <LoadingButton
              type='submit'
              appearance='primary'
              isLoading={submitting}
            >
              Получить
            </LoadingButton>
          </ButtonGroup>
        </FormFooter>
      </form>
    )}
  </Form>
</div>
)

export default TodoForm