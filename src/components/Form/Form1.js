import React, { Component } from 'react';
import css from './Form.css';
// import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleTagChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ tag: event.currentTarget.value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="wrapper">
          <label className="label__name">
            Имя
            <input
              className="input__name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label className="label__tag">
            Прозвище
            <input
              className="input__tag"
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleNameChange}
            />
          </label>
        </div>
        <button type="submit" className="form__btn">
          Отправить форму
        </button>
      </form>
    );
  }
}

export default Form;
