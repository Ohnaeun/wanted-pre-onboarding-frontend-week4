import { useState, useEffect } from 'react';
import axios from 'axios';
import { EXPIRE_TIME_MS } from '../constants/time';
import { SickProps } from 'types/sick';

const useSearch = (term: string) => {
  const [searchTerm, setSearchTerm] = useState(term);
  const [searchResults, setSearchResults] = useState<SickProps[]>([]);
  const [cachedResults, setCachedResults] = useState<{
    [term: string]: SickProps[];
  }>({});

  const fetchSearchResults = async (searchTerm: string) => {
    try {
      console.info('calling api');

      if (cachedResults[term]) {
        setSearchResults(cachedResults[term]);
      } else {
        const response = await axios.get(
          `http://localhost:4000/sick?q=${searchTerm}`,
        );
        const results = response.data.slice(0, 7);
        setSearchResults(results);

        setCachedResults((prevCachedResults) => ({
          ...prevCachedResults,
          [term]: results,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setSearchTerm(term);
  }, [term]);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCachedResults({});
    }, EXPIRE_TIME_MS);

    return () => clearTimeout(timerId);
  }, []);

  return { searchTerm, searchResults, setSearchTerm };
};

export default useSearch;
