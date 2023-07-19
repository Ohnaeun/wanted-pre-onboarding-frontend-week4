import React, { useState } from 'react';
import useSearch from '../hooks/useSearch';
import SearchResultsList from './SearchResultsList';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

function SearchBar() {
  const {
    searchTerm,
    searchResults,
    setSearchTerm,
    handleButtonClick,
    cachedResults,
  } = useSearch();
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <SearchContainer>
      <SearchInput>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요."
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <SearchButton onClick={handleButtonClick}>
          <SearchIcon />
        </SearchButton>
      </SearchInput>
      {isFocused ? (
        <SearchResultsList
          searchResults={searchResults}
          cachedResults={cachedResults}
        />
      ) : null}
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
  width: 490px;
  position: relative;
`;

const SearchInput = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 10px 20px 24px;
  background-color: #fff;
  border-radius: 42px;
  input {
    width: 430px;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.018em;
    line-height: 1.6;
  }
`;

const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007be9;
  border-radius: 100%;
  cursor: pointer;

  svg {
    width: 21px;
    height: 21px;
    fill: #fff;
  }
`;
