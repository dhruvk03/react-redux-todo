import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer';

const App = (props) => {
    return (
        <div>
            <AddTodo todos={props.todos} />
            <VisibleTodoList />
            <Footer />
        </div>
    )
}

export default App;