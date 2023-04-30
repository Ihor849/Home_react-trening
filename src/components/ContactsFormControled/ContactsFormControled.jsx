import React, { Component } from 'react';
// import { ErrorMessage, Formik, useFormik } from 'formik';
import { nanoid } from 'nanoid';
import { Form, Button, Container } from './ContactsFormControled.styled';

export class FormGroop extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({
      id: nanoid(6),
      ...this.state,
    });
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <Form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <p></p>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <p></p>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
