const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })
        case 'REQUEST_TODOS':
            console.log('REQUEST_TODOS')
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'RECEIVE_TODOS':
            console.log('RECEIVE_TODOS action: ', action)
            return Object.assign({}, state, {
                isFetching: false,
                todos: action.todos,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

const todos = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'REQUEST_TODOS':
            return todo(state, action)
        case 'RECEIVE_TODOS':
            console.log('RECEIVE_TODOS:state-action: ', state, action)
            return todo(state, action)
        case 'TOGGLE_TODO':
            return state.todos.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

export default todos