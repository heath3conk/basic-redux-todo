import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchTodosIfNeeded} from '../actions/index'
import App from '../components/App'
import TodoList from '../components/TodoList'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const {dispatch} = this.props
        console.log("in component did mount")
        dispatch(fetchTodosIfNeeded())
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.todos !== this.props.todos) {
    //         const {dispatch} = nextProps
    //         dispatch(fetchTodosIfNeeded())
    //     }
    // }

    handleChange() {
        this.props.dispatch(fetchTodosIfNeeded())
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const {dispatch} = this.props
        dispatch(fetchTodosIfNeeded())
    }


    render() {
        const {todos, isFetching, lastUpdated} = this.props

        return (
            <div>
                <App value={todos || []}
                     onChange={this.handleChange}/>
                <p>
                    {lastUpdated &&
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                    </span>
                    }
                    {!isFetching &&
                    <a href='#'
                    onClick={this.handleRefreshClick}>
                        Refresh
                    </a>
                    }
                </p>
                {isFetching && todos.length === 0 &&
                <h2>Empty.</h2>
                }
                {todos.items.length > 0 &&
                    <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <TodoList todos={todos.items}/>
                    </div>
                }
            </div>
        )
    }
}

AsyncApp.propTypes = {
    todos: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    const { todos } = state

    if(!todos) {
        this.todos = []
    }

    return {
        todos: state.todos,
        isFetching: state.todos.isFetching,
        lastUpdated: state.lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)