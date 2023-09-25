import { Container, Title } from './App.styled';
import Contacts from './Contacts/Contacts';
import ContactForm from './Form/Form';
import React, { useEffect, useState } from 'react';
import SearchQuery from './SearchQuery/SearchQuery';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = data => {
    const result = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (result) {
      return alert(`${data.name} in already in contacts`);
    }

    setContacts(prevState => [data, ...prevState]);
  };

  const filterContacts = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addNewContact={addNewContact} />
      <Contacts contacts={getVisibleContacts()} deleteContact={deleteContact}>
        <SearchQuery value={filter} filterContacts={filterContacts} />
      </Contacts>
    </Container>
  );
};

export default App;
