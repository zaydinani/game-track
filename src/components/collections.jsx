import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../styles/collections.scss';
import GameCard from './gameCard';

function Collection() {
  const location = useLocation();
  let category;

  if (location.pathname === '/playing') {
    category = 'playingGames';
  } else if (location.pathname === '/want') {
    category = 'wantGames';
  } else if (location.pathname === '/owned') {
    category = 'ownedGames';
  } else if (location.pathname === '/finished') {
    category = 'finishedGames';
  }
  const [games, setGames] = useState([]);
  useEffect(() => {
    // Retrieve the games from local storage based on the selected category
    const savedGames = JSON.parse(localStorage.getItem(category)) || [];
    setGames(savedGames);
  }, [category]);

  return (
    <div className='collection-container'>
      <h1>
        {category === 'playingGames'
          ? 'Playing Now'
          : category === 'wantGames'
          ? 'Want to Play'
          : category === 'ownedGames'
          ? 'Owned Games'
          : 'Finished Games'}
      </h1>
      <div className='card-container'>
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.name}
              imageUrl={game.background_image}
              rating={game.metacritic}
            />
          ))
        ) : (
          <div className="no-games-message">
            <p>No games in this collection. Please add a game.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
