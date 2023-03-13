import React from 'react'

import ButtonGroup from '@atlaskit/button/button-group'
import LoadingButton from '@atlaskit/button/loading-button'
import TextField from '@atlaskit/textfield'

import Form, { Field as FieldForm, FormFooter, ErrorMessage } from '@atlaskit/form'


const Field = ({ name, label, validate = null }) => (
  <FieldForm
    aria-required={true}
    name={name}
    defaultValue=''
    label={label}
    isRequired
    validate={validate}
  >
    {({ fieldProps, error, valid }) => (
      <>
        <TextField {...fieldProps} />
        {error && (
          <ErrorMessage>{error}</ErrorMessage>
        )}
      </>
    )}
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
        <Field
          name={'todoCount'}
          label={'Количество задач'}
          validate={async (value) => {
            if (Number.isInteger(Number(value))) {
              return undefined
            }

            return new Promise((resolve) =>
              setTimeout(resolve, 300),
            ).then(() => 'Введите целое число')
          }}
        />
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