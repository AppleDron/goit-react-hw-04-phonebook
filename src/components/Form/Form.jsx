import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Forma, Label } from './Form.styled';

export default class ContactForm extends Component {
  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = e => {
    e.preventDefault();

    const userId = nanoid();

    this.props.addNewContact({
      id: userId,
      name: e.target.name.value,
      number: e.target.number.value,
    });

    e.target.name.value = '';
    e.target.number.value = '';
  };

  render() {
    return (
      <div>
        <Forma onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameId}>
            Name
            <input
              id={this.nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor={this.numberId}>
            Number
            <input
              id={this.numberId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <button type="submit">Add contact</button>
        </Forma>
      </div>
    );
  }
}
