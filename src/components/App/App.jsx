import React, { Component } from 'react';
import shortid from 'shortid';

// import Counter from 'components/Counter';
// import Drobdown from 'components/Drobdown';
import ColorPicker from 'components/ColorPicker';
import Container from 'components/Container/Container';
import TodoEditor from '../TodoEditor/TodoEditor';
import TodoList from 'components/TodoList';
import Filter from '../TodoFilter/TodoFilter';
import Modal from 'components/Modal/Modal';
import Clock from 'components/Clock/Clock';
import Tabs from 'components/Tabs/Tabs';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

import initialTodos from 'components/json/todos.json';
import tabs from 'components/json/tabs.json';

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
    todos: [],
    filter: '',
    showModal: false,
    showTimer: false,
    showModalForm: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    const todosItem = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todosItem);

    // Необходима проверка что в локал сторедж //
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
    // console.log(parsedTodos);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // НЕЛЬЗЯ делать    <  this.setState  > без условия проверки //
  //   // console.log('App componentDidUpdate');
  //   // console.log(prevState);
  //   // console.log(this.state);
  //   // Проверка предыдущего и тикущего состояния //
  //   if (this.state.todos !== prevState.todos) {
  //     // console.log('Обновилось поле todos');
  //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
  //   }
  // }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
    this.toggleModalForm();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log("Нашли нужный Id !!!");
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       }
    //     }
    //     return todo;
    //   }),

    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  toggleModal = () => {
    // this.setState(state => ({
    //   showModal: !state.showModal,
    // }));
    //ДЕСТРУКТОРИЗИРОВАНО//
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  toggleTimer = () => {
    // this.setState(state => ({
    //   showModalTimer: !state.showModalTimer,
    // }));
    //ДЕСТРУКТОРИЗИРОВАНО//
    this.setState(({ showTimer }) => ({
      showTimer: !showTimer,
    }));
  };
  toggleModalForm = () => {
    // this.setState(state => ({
    //   showModalForm: !state.showModalForm,
    // }));
    //ДЕСТРУКТОРИЗИРОВАНО//
    this.setState(({ showModalForm }) => ({
      showModalForm: !showModalForm,
    }));
  };

  render() {
    // НЕЛЬЗЯ делать    <  this.setState  > без условия проверки //
    // console.log('App render');
    const { todos, filter, showModal, showTimer, showModalForm } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    return (
      <Container>
        {showTimer && <Clock />}
        <button type="button" onClick={this.toggleTimer}>
          ПОКАЗАТЬ/СКРЫТЬ ТАЙМЕР
        </button>
        <IconButton onClick={this.toggleModalForm} aria-label="Добавить  todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModalForm && (
          <Modal onClose={this.toggleModalForm}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        {/* <Tabs items={tabs} />  */}
        {/* <h2>Modal</h2> */}
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть МОДАЛКУ
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h3>Это модальное окно как children</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nemo
              illo distinctio amet? In illum sequi quis mollitia ipsum. Soluta
              cupiditate est id veniam culpa eius expedita perferendis neque
              eveniet?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть МОДАЛКУ
            </button>
          </Modal>
        )} */}
        {/* <h2>Состояние компонента TODO</h2> */}
        {/* <Counter initialValue={0} /> */}
        {/* <Drobdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>
        {/* <TodoEditor onSubmit={this.addTodo} /> */}

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
