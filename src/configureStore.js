import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import todoApp from './reducers/index'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        todoApp,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}