import { useState, useEffect } from 'react';
import axios from 'axios';

const key = 'da1ce367e34a49d8b575c8cc4f91f0f8';

export function useGameData() {
  const [popularGames, setPopularGames] = useState([]);
  const [latestGames, setLatestGames] = useState([]);
  const [comingSoonGames, setComingSoonGames] = useState([]);
  const [topRatedGames, setTopRatedGames] = useState([]);
  //! fetch popular games 
  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?ordering=-added&key=${key}&page_size=10`);
        setPopularGames(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    //! fetch latest games 
    const fetchLatestGames = async () => {
      try {
        const today = new Date();
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        const formattedLastMonth = lastMonth.toISOString().split('T')[0];
        const response = await axios.get(`https://api.rawg.io/api/games?dates=${formattedLastMonth},${today.toISOString().split('T')[0]}&ordering=-added&key=${key}&page_size=10`);
        setLatestGames(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    //! fetch coming soon games 
    const fetchComingSoonGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?dates=2023-07-11,2024-07-11&ordering=-added&key=${key}&page_size=10`);
        setComingSoonGames(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    //! fetch top rated games 
    const fetchTopRatedGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?ordering=-metacritic&key=${key}&page_size=10`)
        setTopRatedGames(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPopularGames();
    fetchLatestGames();
    fetchComingSoonGames();
    fetchTopRatedGames();
  }, []);
  return { popularGames, latestGames, comingSoonGames, topRatedGames };
}