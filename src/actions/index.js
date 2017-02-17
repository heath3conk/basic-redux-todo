import fetch from 'isomorphic-fetch'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const UPDATE_TODOS = 'UPDATE_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const REQUEST_TODOS = 'REQUEST_TODOS'

let nextTodoId = 0

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
    return { type: ADD_TODO, id:nextTodoId++, text }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

//---------------------------------------------------------------
function requestTodos() {
    return {
        type: REQUEST_TODOS
    }
}

function receiveTodos(json) {
    // console.log('** RECEIVED TODOS **')
    // console.log('json: ', json)
    return {
        type: RECEIVE_TODOS,
        todos: json
    }
}


function fetchTodos() {
    return dispatch => {
        dispatch(requestTodos())
        return fetch('http://localhost:9000/todos')
            .then(response => response.json())
            .then(json => dispatch(receiveTodos(json)))
    }
}

function shouldFetchTodos(state) {
    // console.log('todos: ', state.todos)
    const todos = state.todos
    if(!todos.items || todos.items.length < 1) {
        return true
    } else if (todos.isFetching) {
        return false
    } else {
        return todos.didUpdate
    }

}

export function fetchTodosIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchTodos(getState())) {
            return dispatch(fetchTodos())
        }
    }

}