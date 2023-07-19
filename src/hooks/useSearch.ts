import { useState, useEffect } from 'react';
import axios from 'axios';
import { DELAY_MS, EXPIRE_TIME_MS } from '../constants/time';
import { SickProps } from 'types/sick';
import useDebounce from './useDebounce';

function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SickProps[]>([]);
  const [cachedResults, setCachedResults] = useState<string[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, DELAY_MS);

  const fetchSearchResults = async (term: string) => {
    try {
      console.info('calling api');

      const response = await axios.get(
        `http://localhost:4000/sick?q=${searchTerm}`,
      );
      const results = response.data.slice(0, 7);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    if (searchTerm) {
      setCachedResults((prevCachedResults) => [
        ...prevCachedResults,
        searchTerm,
      ]);
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults(searchTerm);
    } else {
      setSearchResults([]);
    }

    if (debouncedSearchTerm) {
      fetchSearchResults(debouncedSearchTerm);
    }
  }, [searchTerm]);

  return {
    searchTerm,
    searchResults,
    cachedResults,
    setSearchTerm,
    handleButtonClick,
  };
}

export default useSearch;
