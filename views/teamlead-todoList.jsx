import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../front/core/configureStore'

import App from '../front/app'

import '../front/assets/styles/index.css'


const { store } = configureStore();

const TeamleadTodoList = () => (
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>
)

export default TeamleadTodoList
