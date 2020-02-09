import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="hello"></TodoItem>
                <TodoItem text="react"></TodoItem>
                <TodoItem text="!!!!!"></TodoItem>
            </div>
        );
    }
}

export default TodoItemList;
