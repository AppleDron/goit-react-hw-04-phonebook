import React, { Component } from 'react';
import {
  SearchInput,
  SearchQueryContainer,
  SearchQueryP,
} from './SearchQuery.styled';

export default class SearchQuery extends Component {
  //   handleChange = e => {
  //     this.props.filterContacts(e.target.value);
  //   };
  render() {
    return (
      <SearchQueryContainer>
        <SearchQueryP>Find contacts by name</SearchQueryP>
        <SearchInput
          value={this.props.value}
          type="text"
          onChange={this.props.filterContacts}
        />
      </SearchQueryContainer>
    );
  }
}
