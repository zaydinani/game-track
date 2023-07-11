import React, { useRef, useState, useEffect } from 'react';
import '../styles/home.scss';
import { useGameData } from '../api/api';
import GameCard from '../components/gameCard';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Home() {
  const { popularGames, latestGames, comingSoonGames, topRatedGames } = useGameData();

  useEffect(() => {
    console.log('Popular Games:', popularGames);
    console.log('Latest Games:', latestGames);
    console.log('coming soon Games:', comingSoonGames);
    console.log('top rated games:', comingSoonGames);

  }, [popularGames, latestGames, comingSoonGames, topRatedGames]);
  return (
    <div className='games-container'>
      <form action='' className='search-bar'>
        <input type='search' name='search' pattern='.*\S.*' required />
        <button className='search-btn' type='submit'>
          <span>Search</span>
        </button>
      </form>
      <h1>Popular</h1>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className='mySwiper'
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {popularGames.map((game) => (
          <SwiperSlide className='SwiperSlide' key={game.id}>
            <GameCard title={game.name} imageUrl={game.background_image} />
          </SwiperSlide>
        ))}
      </Swiper>
        <div className='latest-games'>
            <h1>latest</h1>
            <div className='game'>
              {latestGames.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.name}
                  imageUrl={game.background_image}
                />
              ))}
            </div>
        </div>
        <div className='latest-games'>
          <h1>anticipated</h1>
          <div className='game'>
            {comingSoonGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.name}
                imageUrl={game.background_image}                
              />
            ))}
          </div>
        </div>
        <div className='latest-games'>
          <h1>top rated</h1>
          <div className='game'>
            {topRatedGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.name}
                imageUrl={game.background_image}               
              />
            ))}
          </div>
        </div>
    </div>
  );
}

export default Home;