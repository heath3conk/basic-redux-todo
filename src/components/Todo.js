import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, value }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {value}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
}

export default Todo