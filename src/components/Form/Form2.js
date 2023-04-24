import React, { Component } from 'react';
import shortid from 'shortid';
import './Form.css';

class Form2 extends Component {
  state = {
    name: '',
    tag: '',
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <form className="form">
        <div className="wrapper2">
          <label htmlFor={this.nameInputId} className="label__name">
            Имя
          </label>
          <input
            className="input__name"
            type="text"
            name="name"
            value={this.state.name}
            id={this.nameInputId}
            onChange={this.handleNameChange}
          />
          <label htmlFor={this.tagInputId} className="label__name"></label>
          Прозвище
          <input
            className="input__name"
            type="text"
            name="tag"
            value={this.state.tag}
            id={this.tagInputId}
            onChange={this.handleNameChange}
          />
        </div>
        <button type="submit" className="form__btn">
          Отправить форму
        </button>
      </form>
    );
  }
}
export default Form2;
