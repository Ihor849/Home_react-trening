import React, { Component } from 'react';
import shortid from 'shortid';
import './Form.css';

class CheckBox extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget);
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

  handlelicence = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
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
          <p>Ваш уровень: </p>
          <div className="radio__btn">
            <label>
              <input
                type="radio"
                name="experience"
                value="junior"
                onChange={this.handleNameChange}
                checked={this.state.experience === 'junior'}
              />
              Junior
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="middle"
                onChange={this.handleNameChange}
                checked={this.state.experience === 'middle'}
              />
              Middle
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="seniar"
                onChange={this.handleNameChange}
                checked={this.state.experience === 'seniar'}
              />
              Seniar
            </label>
            <br />
          </div>
        </div>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handlelicence}
          ></input>
          Согласен с условием
        </label>
        <button
          type="submit"
          disabled={!this.state.licence}
          className="form__btn"
        >
          Отправить форму
        </button>
      </form>
    );
  }
}
export default CheckBox;
