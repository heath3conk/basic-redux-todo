import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodosCounter from './TodosCounter'

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <TodosCounter/>
        <Footer/>
    </div>
)

export default App