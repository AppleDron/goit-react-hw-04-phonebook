import React from 'react';
import {
  SearchInput,
  SearchQueryContainer,
  SearchQueryP,
} from './SearchQuery.styled';

const SearchQuery = ({ value, filterContacts }) => {
  return (
    <SearchQueryContainer>
      <SearchQueryP>Find contacts by name</SearchQueryP>
      <SearchInput value={value} type="text" onChange={filterContacts} />
    </SearchQueryContainer>
  );
};

export default SearchQuery;
