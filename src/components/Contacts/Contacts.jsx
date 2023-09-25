import React from 'react';
import {
  ContactList,
  Contactitem,
  DeleteButton,
  TitleContacts,
} from './Contacts.styled';
import { AiFillDelete } from 'react-icons/ai';

const Contacts = ({ children, contacts, deleteContact }) => {
  return (
    <div>
      <TitleContacts>Contacts</TitleContacts>
      {children}
      <ContactList>
        {contacts.map(contact => (
          <Contactitem key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <DeleteButton
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              <AiFillDelete />
            </DeleteButton>
          </Contactitem>
        ))}
      </ContactList>
    </div>
  );
};

export default Contacts;
