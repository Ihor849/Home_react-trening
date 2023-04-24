import React, { Component } from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends Component {
  static defaultProps = {
    // initialValue: 5,
  };
  //   ПОрядок запеси //
  //  1   СТАТИКА
  // 2 СОСТОЯНИЕ
  // 3 МЕТОДЫ
  // 4 РЕНДЕР  //
  static propTypes = {
    //--------------//
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 5,
  //   };
  // }

  state = {
    value: 0,
  };

  // handleIncrement = event => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log('Увеличить на 1');
  //   console.log(this);

  // const { target } = event; //const target = event.target
  // console.log(target);
  // setTimeout(() => {
  //   console.log(event.type);
  // }, 1000);
  // };

  // handleDecrement = () => {
  //   console.log('Уменьшить на 1');
  //   console.log(this);
  // };

  //Обновление состояния перерендер статический для value
  // handleIncrement = () => {
  //   this.setState({
  //     value: 10,
  //   });
  // };

  //Обновление состояния от предыдущего
  handleIncrement = () => {
    // this.setState({ value: 123456 });//просто переписать значение
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />

        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}
export default Counter;
