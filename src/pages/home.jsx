import React, { useRef, useState, useEffect  } from 'react';
import '../styles/home.scss';
import { useGameData } from '../api/api';
import GameCard from '../components/gameCard'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Home() {
  const data = useGameData();
    // Sort the data by rating 
    const sortedData = [...data].sort((a, b) => b.rating - a.rating);
    // Get the top 10 highest rated games
    const topRatedGames = sortedData.slice(0, 10);
  
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
          {topRatedGames.map(game => (
            <SwiperSlide key={game.id}>
              <GameCard
                title={game.name}
                description={game.description}
                imageUrl={game.background_image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='latest-games'>
            <h1>latest</h1>
            <div>
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
            </div>
        </div>
        <div className='latest-games'>
            <h1>anticipated</h1>
            <div>
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
            </div>
        </div>
        <div className='latest-games'>
            <h1>top rated</h1>
            <div>
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
                <GameCard
                    title="Retro Game Night"
                    description="Lorem ipsum Deserunt repellat enim quos quisquam!"
                    imageUrl="https://img.freepik.com/free-vector/retro-gaming-poster-template_23-2148766345.jpg"
                />
            </div>
        </div>
    </div>
  );
}

export default Home;