import React, { useState } from 'react';
import useSearch from '../hooks/useSearch';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResults } = useSearch(searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요."
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchInput>
      <ul>
        {searchResults === null ? (
          <li>검색 중...</li>
        ) : searchResults.length === 0 && searchTerm ? (
          <li>검색어 없음</li>
        ) : (
          searchResults.map((result, index) => (
            <li key={index}>
              <SearchIcon />
              {result.sickNm}
            </li>
          ))
        )}
      </ul>
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
  width: 490px;
  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 8px;
    padding: 24px 0 16px;
    box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  }
  li {
    width: 100%;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.018em;
    line-height: 1.6;
    cursor: pointer;

    &:hover {
      background-color: rgb(248, 249, 250);
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 12px;
      fill: #a7afb7;
    }
  }
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
