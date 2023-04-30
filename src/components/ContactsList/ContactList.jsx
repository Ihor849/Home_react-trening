import React from 'react';
import { Wrapper, List, Item } from './ContactsList.styled';
export const ContactList = ({ contacts, contactToDelete }) => {
  return (
    <Wrapper>
      <List>
        {contacts.map(contact => {
          return (
            <Item key={contact.id}>
              <span>{contact.name} :</span>
              <span>{contact.number}</span>
              <button type="button" onClick={() => contactToDelete(contact.id)}>
                Delete
              </button>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
