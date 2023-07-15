import React, { useRef, useState, useEffect } from 'react';

import { useGameData } from '../api/api';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../styles/newhome.scss';
import CarouselGameCard from '../components/carouselGameCard';
import GameCard from '../components/gameCard';

function NewHome() {
  const { popularGames, latestGames, comingSoonGames, topRatedGames } = useGameData();

  useEffect(() => {
    //console.log('Popular Games:', popularGames);
    //console.log('Latest Games:', latestGames);
    //console.log('top rated Games:', topRatedGames);
    //console.log('coming soon games:', comingSoonGames);

  }, [popularGames, latestGames, comingSoonGames, topRatedGames]);
  return (
    <div className='games--container'>
        <form className="search-container">
          <input type="text" id="search-bar" placeholder="search games ?"/>
          <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
      </form>
      <h1 className="line-title">popular games</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {popularGames.map((game) => (
          <SwiperSlide key={game.id}>
            <CarouselGameCard 
              title={game.name}
              imageUrl={game.background_image}
              publisher={game.publishers}
              rating={game.metacritic}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="line-title">latest games</h1>
      <div className="game-cards">
        {latestGames.map((game) => (
          <GameCard 
            key={game.id}
            title={game.name}
            imageUrl={game.background_image}
            rating={game.metacritic}
          />
        ))}
      </div>
      <h1 className="line-title">anticipated games</h1>
      <div className="game-cards">
        {comingSoonGames.map((game) => (
          <GameCard 
            key={game.id}
            title={game.name}
            imageUrl={game.background_image}
            rating={game.released}
          />
        ))}
      </div>
      <h1 className="line-title">top rated games</h1>
      <div className="game-cards">
        {topRatedGames.map((game) => (
          <GameCard 
            key={game.id}
            title={game.name}
            imageUrl={game.background_image}
            rating={game.metacritic}
          />
        ))}
      </div>
    </div>
  );
}

export default NewHome;