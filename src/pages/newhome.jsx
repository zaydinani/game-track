import React, { useRef, useState } from 'react';
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
  return (
    <div className='games--container'>
        <form class="search-container">
          <input type="text" id="search-bar" placeholder="search games ?"/>
          <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
      </form>
      <h1 className="line-title">trending games</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselGameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            publisher={'woow'}
            rating={2.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselGameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            publisher={'woow'}
            rating={2.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselGameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            publisher={'woow'}
            rating={2.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselGameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            publisher={'woow'}
            rating={2.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselGameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            publisher={'woow'}
            rating={2.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselGameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            publisher={'woow'}
            rating={2.5}
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="line-title">trending games</h1>

        <div class="game-cards">
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
          <GameCard 
            title={'haha'}
            imageUrl={'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'}
            rating={2.5}
          />
        </div>
    </div>
  );
}

export default NewHome;