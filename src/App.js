import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
    id = 3;
    textColors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
    state = {
        input: '',
        selectedColor: this.textColors[0],
        todos: [
            {
                id: 0,
                text: '리액트 소개',
                checked: false,
                color: this.textColors[0]
            },
            {
                id: 1,
                text: '리액트 소개',
                checked: true,
                color: this.textColors[0]
            },
            {
                id: 2,
                text: '리액트 소개',
                checked: false,
                color: this.textColors[0]
            }
        ]
    };

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleCreate = () => {
        const { input, todos, selectedColor } = this.state;
        this.setState({
            input: '',
            selectedColor: selectedColor,
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color: selectedColor
            })
        });
    };

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    };

    handleToggle = id => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];
        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    };

    handleRemove = id => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    };

    handleChangeColor = index => {
        this.setState({
            selectedColor: this.textColors[index]
        })
    };

    render() {
        const { input, selectedColor, todos } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleChangeColor
        } = this;

        return (
            <TodoListTemplate
                form={
                    <Form
                        value={input}
                        selectedColor={selectedColor}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
                }
                textColors={this.textColors}
                selectedColor={selectedColor}
                onChangeColor={handleChangeColor}
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoListTemplate>
        );
    }
}

export default App;
