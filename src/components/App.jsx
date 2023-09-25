import { Container, Title } from './App.styled';
import Contacts from './Contacts/Contacts';
import ContactForm from './Form/Form';
import React, { Component } from 'react';
import SearchQuery from './SearchQuery/SearchQuery';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts.length !== this.state.contacts.length)
      return localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
  };

  componentDidMount = () => {
    const storageContacts = localStorage.getItem('contacts');

    if (storageContacts) {
      const parsedContacts = JSON.parse(storageContacts);
      this.setState({ contacts: parsedContacts });
    }
  };

  addNewContact = data => {
    const result = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (result) {
      return alert(`${data.name} in already in contacts`);
    }

    this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
  };

  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    console.log(filter);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addNewContact={this.addNewContact} />
        <Contacts
          contacts={this.getVisibleContacts()}
          deleteContact={this.deleteContact}
        >
          <SearchQuery
            value={this.state.filter}
            filterContacts={this.filterContacts}
          />
        </Contacts>
      </Container>
    );
  }
}
