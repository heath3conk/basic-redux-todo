import {connect} from 'react-redux'
import React from 'react'

const TodosCounter = ({todos}) => (
    <p>
        {todos.length}
    </p>
)


const mapStateToProps = (state) => ({
    todos: state.todos
})

export default  connect(
    mapStateToProps)(TodosCounter)
