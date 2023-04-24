import React, { Component } from 'react';
// import Counter from 'components/Counter';
// import Drobdown from 'components/Drobdown';
// import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';

import initialTodos from 'components/json/todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter initialValue={0} /> */}
        {/* <Drobdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
