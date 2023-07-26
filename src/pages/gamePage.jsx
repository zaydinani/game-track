import '../styles/gamePage.scss'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGameData } from '../api/api';

function game() {

    const { id } = useParams();
    const { gameData, fetchGameData } = useGameData();
  
    useEffect(() => {
        const gameId = id;
        
        fetchGameData(gameId);
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
                            <p>1000</p>
                        </div>
                        <div className="review">
                            <h3>dropped</h3>
                            <p>1000</p>
                        </div>
                        <div className="review">
                            <h3>owned</h3>
                            <p>1000</p>
                        </div>
                        <div className="review">
                            <h3>playing</h3>
                            <p>1000</p>
                        </div>
                        <div className="review">
                            <h3>to play</h3>
                            <p>1000</p>
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
                        <h2>story </h2>
                        <p className='summary-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magnam rem voluptatibus quaerat alias modi nostrum iste, officiis corrupti molestiae nisi porro quod ipsum. Sit quae ducimus minima cumque ea.</p>
                        <div className='dev'>
                            <div>
                                <h3>developer</h3>
                                <p>rockstar games</p>
                            </div>
                            <div>
                                <h3>publisher</h3>
                                <p>Take-Two Interactive</p>
                            </div>
                            <div>
                                <h3>genre</h3>
                                <p>shooter</p>
                                <p>adventure</p>
                            </div>
                        </div>
                        <div className="screenshots">
                            <div>
                                <img src="/GTA-5-cheats-550x309.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/GTA-5-cheats-550x309.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/GTA-5-cheats-550x309.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/GTA-5-cheats-550x309.jpg" alt="" />
                            </div>      
                            <div>
                                <img src="/GTA-5-cheats-550x309.jpg" alt="" />
                            </div>  
                            <div>
                                <img src="/GTA-5-cheats-550x309.jpg" alt="" />
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
  
export default game