import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'da1ce367e34a49d8b575c8cc4f91f0f8';

export function useGameData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return data;
}
