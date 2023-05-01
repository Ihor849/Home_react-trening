import React, { Component } from 'react';

import './App.css';
// import LoginForm from "./components/formNotControled";
// import FormControlled from "./components/formControled";
// import React from "react";
// import ComplexForm from "./components/complexForm";
// import FormGenerateId from "./components/generateId";
// import CheckboxForm from "./components/Checkboks";
// import Radio from "./components/Radio";
// import Select from "./components/Select";
import { FormGroop } from 'components/ContactsFormControled/ContactsFormControled';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  contactToDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
    console.log(e.target.value);
  };

  handleFilterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim());
    });
  };
  render() {
    const filteredContacts = this.handleFilterContacts();
    return (
      <div className="App">
        {/*<LoginForm onSubmit={values => console.log('values: ', values)} />*/}
        {/*<FormControlled />*/}
        {/*<ComplexForm onSubmit={values => console.log(values)} />*/}
        {/*<FormGenerateId/>*/}
        {/*<CheckboxForm />*/}
        {/*<Radio />*/}
        {/*<Select />*/}
        <Section title="Forms in Form">
          <FormGroop addContact={this.handleAddContact} />
        </Section>
        <Section title="Contacts Boock">
          <Filter value={this.state.filter} handleChange={this.handleChange} />
          <ContactList
            contacts={filteredContacts}
            contactToDelete={this.contactToDelete}
          />
        </Section>
      </div>
    );
  }
}
