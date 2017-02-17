import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AsyncApp from './containers/AsyncApp'

const store = configureStore()

render(
    <Provider store={store}>
        <AsyncApp />
    </Provider>,
    document.getElementById('root')
)