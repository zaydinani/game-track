import '../styles/gamePage.scss'
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGameData } from '../api/api';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

function Game() {
    const { id } = useParams();
    const { gameData, fetchGameData } = useGameData();
  
    useEffect(() => {
        const gameId = id;
        
        fetchGameData(gameId);
        console.log('Fetched game');

    }, [id]); 
    
    if (!gameData) {
        return <div>Loading...</div>;
    }
    
    console.log(gameData);

    return (
      <>
        <div className="game-page-container">
            <div className='game-img'>
                <img src={gameData.background_image} alt="" />
            </div>
            <div className='game-info'>
                <div>
                    <h1>{gameData.name}</h1>
                    <h3>{gameData.released}</h3>
                    <div className='consoles'>
                        {gameData.platforms.map((gamePlatform) => (
                            <p key={gamePlatform.platform.id}>{gamePlatform.platform.name}</p>
                        ))}
                    </div>
                    <div className="game-reviews">
                        <div className="review">
                            <h3>beaten</h3>
                            <p>{gameData.added_by_status.beaten}</p>
                        </div>
                        <div className="review">
                            <h3>owned</h3>
                            <p>{gameData.added_by_status.owned}</p>
                        </div>
                        <div className="review">
                            <h3>playing</h3>
                            <p>{gameData.added_by_status.playing}</p>
                        </div>
                        <div className="review">
                            <h3>to play</h3>
                            <p>{gameData.added_by_status.toplay}</p>
                        </div>
                    </div>
                    <div className='critic-reviews'>
                        <div className="critic-review">
                            <img src="/star.png" alt="" />
                            <div>
                                <h3>rawg rating</h3>
                                <p>{gameData.rating}</p>
                            </div>
                        </div>
                        <div className="critic-review">
                            <img src="/pngwing.com.png" alt="" />
                            <div>
                                <h3>metacritic rating</h3>
                                <p>{gameData.metacritic}</p>
                            </div>
                        </div>
                    </div>
                    <div className='actions'>
                        <form action="">
                            <button>+ playing</button>
                        </form>
                        <form action="">
                            <button>+ finished</button>
                        </form>
                        <form action="">
                            <button>+ owned</button>
                        </form>
                    </div>
                    <div className='summary'>
                        <h2>summary</h2>
                        <p className='summary-para'>{gameData.description_raw}</p>
                        {gameData && gameData.platforms && gameData.platforms.some(platform => platform.platform.name === 'PC' && platform.requirements) && (
                            <div>
                                {gameData.platforms.map(platform => {
                                    if (platform.platform.name === 'PC' && platform.requirements) {
                                        return (
                                            <React.Fragment key={platform.platform.slug}>
                                                {platform.requirements.minimum && platform.requirements.recommended && (
                                                    <h2>PC Requirements</h2>
                                                )}
                                                {platform.requirements.minimum && (
                                                    <p className='summary-para'>{platform.requirements.minimum}</p>
                                                )}
                                                {platform.requirements.recommended && (
                                                    <p className='summary-para'>{platform.requirements.recommended}</p>
                                                )}
                                            </React.Fragment>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                        <div className='dev'>
                            <div>
                                <h3>developer</h3>
                                <p>{gameData.developers[0].name}</p>
                            </div>
                            {gameData.publishers[0]?.name && (
                            <div>
                                <h3>publisher</h3>
                                <p>{gameData.publishers[0].name}</p>
                            </div>
                        )}
                            <div>
                                <h3>genre</h3>
                                {gameData.genres.map(genre => (
                                    <p key={genre.id}>{genre.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className="screenshots">
                            <Swiper
                                pagination={{
                                dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {gameData.screenshots.map(screenshot => (
                                    <SwiperSlide key={screenshot.id}>
                                        <img src={screenshot.image} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
  
export default Game