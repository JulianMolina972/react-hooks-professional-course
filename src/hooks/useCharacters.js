import { useState, useEffect } from 'react';

export const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()  =>  {
    fetchData();
  }, [url]);

  return characters
};