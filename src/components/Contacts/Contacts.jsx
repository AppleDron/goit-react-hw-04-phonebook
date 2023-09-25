import React, { Component } from 'react';
import {
  ContactList,
  Contactitem,
  DeleteButton,
  TitleContacts,
} from './Contacts.styled';
import { AiFillDelete } from 'react-icons/ai';

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <TitleContacts>Contacts</TitleContacts>
        {this.props.children}
        <ContactList>
          {this.props.contacts.map(contact => (
            <Contactitem key={contact.id}>
              <p>
                {contact.name}: <span>{contact.number}</span>
              </p>
              <DeleteButton
                type="button"
                onClick={() => this.props.deleteContact(contact.id)}
              >
                <AiFillDelete />
              </DeleteButton>
            </Contactitem>
          ))}
        </ContactList>
      </div>
    );
  }
}
