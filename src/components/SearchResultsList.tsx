import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { SickProps } from 'types/sick';
import styled from 'styled-components';

interface Props {
  searchResults: SickProps[];
  cachedResults?: string[];
}

function SearchResultsList({ searchResults, cachedResults }: Props) {
  console.log(searchResults, cachedResults);
  return (
    <List>
      {cachedResults && cachedResults.length > 0 && (
        <>
          <span>최근 검색어</span>
          {cachedResults.map((item, index) => (
            <li key={index}>
              <SearchIcon />
              {item}
            </li>
          ))}
        </>
      )}

      {searchResults.length > 0 ? (
        <>
          <span>추천 검색어</span>
          {searchResults.map((result) => (
            <li key={result.sickCd}>
              <SearchIcon />
              {result.sickNm}
            </li>
          ))}
        </>
      ) : (
        <li>검색어 없음</li>
      )}
    </List>
  );
}

export default SearchResultsList;

const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 8px;
    padding: 24px 0 16px;
    box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  }
  span {
    display: flex;
    justify-content: start;
    padding: 0 24px;
    font-size: 13px;
    line-height: 1.6;
    color: #a7afb7;
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
  `;
