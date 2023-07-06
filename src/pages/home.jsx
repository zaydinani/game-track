import '../styles/home.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import GameCard from '../components/gameCard'
function Home() {
  return (
    
    <div className='games-container'>
        <form action="" class="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required/>
            <button class="search-btn" type="submit">
                <span>Search</span>
            </button>
        </form>
        <h1>popular</h1>
        <Swiper
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
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
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </SwiperSlide>
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