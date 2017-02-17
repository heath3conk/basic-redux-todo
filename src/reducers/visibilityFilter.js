const visibilityFilter = (state = 'SHOW_ALL', action) => {
    console.log("in visibilityFilter reducer", state, action.type, action.filter)
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter