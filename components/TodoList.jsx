import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {
            todos.map((todo, index) => {
                <Todo key={index} {...todo} onClick={onTodoClick} />
            })
        }
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }
        ).isRequired
    ).isRequired
}

export default TodoList;