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
    // Extract the "id" parameter from the URL using the "useParams" hook
    const { id } = useParams();

    // Get the game data and a function to fetch the game data using the "useGameData" hook
    const { gameData, fetchGameData } = useGameData();

    // Define state variables for the collections of games
    const [playingGames, setPlayingGames] = useState([]);
    const [finishedGames, setFinishedGames] = useState([]);
    const [wantGames, setWantGames] = useState([]);
    const [ownedGames, setOwnedGames] = useState([]);
    // clear the collections of games
    const [clearCollections, setClearCollections] = useState(false);

    // Create references to the collections of games using the "useRef" hook
    const playingGamesRef = useRef([]);
    const finishedGamesRef = useRef([]);
    const wantGamesRef = useRef([]);
    const ownedGamesRef = useRef([]);

    // Fetch the collections of games from local storage and the game data from the API using the "useEffect" hook
    useEffect(() => {
        const gameId = id;

        // Retrieve the collections of games from local storage
        const savedPlayingGames = JSON.parse(localStorage.getItem('playingGames'));
        const savedFinishedGames = JSON.parse(localStorage.getItem('finishedGames'));
        const savedWantGames = JSON.parse(localStorage.getItem('wantGames'));
        const savedOwnedGames = JSON.parse(localStorage.getItem('ownedGames'));

        // Update the state variables and the references with the retrieved collections of games
        setPlayingGames(savedPlayingGames || []);
        setFinishedGames(savedFinishedGames || []);
        setWantGames(savedWantGames || []);
        setOwnedGames(savedOwnedGames || []);

        playingGamesRef.current = savedPlayingGames || [];
        finishedGamesRef.current = savedFinishedGames || [];
        wantGamesRef.current = savedWantGames || [];
        ownedGamesRef.current = savedOwnedGames || [];

        // Fetch the game data from the API
        fetchGameData(gameId);
    }, [id]);

    // clearing all games from collections
    useEffect(() => {
        if (clearCollections) {
            playingGamesRef.current = [];
            finishedGamesRef.current = [];
            wantGamesRef.current = [];
            ownedGamesRef.current = [];
        
            setPlayingGames([]);
            setFinishedGames([]);
            setWantGames([]);
            setOwnedGames([]);
        
            localStorage.removeItem('playingGames');
            localStorage.removeItem('finishedGames');
            localStorage.removeItem('wantGames');
            localStorage.removeItem('ownedGames');
        
            setClearCollections(false);
        }
    }, [clearCollections]);
    
    // Save the collections of games to local storage whenever they change using the "useEffect" hook
    useEffect(() => {
        localStorage.setItem('playingGames', JSON.stringify(playingGamesRef.current));
        localStorage.setItem('finishedGames', JSON.stringify(finishedGamesRef.current));
        localStorage.setItem('wantGames', JSON.stringify(wantGamesRef.current));
        localStorage.setItem('ownedGames', JSON.stringify(ownedGamesRef.current));
    
        console.log('playingGames', playingGamesRef.current);
        console.log('finishedGames', finishedGamesRef.current);
        console.log('wantGames', wantGamesRef.current);
        console.log('ownedGames', ownedGamesRef.current);
    }, [playingGamesRef.current, finishedGamesRef.current, wantGamesRef.current, ownedGamesRef.current]);
    
    // Update the appropriate collection of games when a user clicks one of the "Add to" buttons
    const handleAddGame = (game, collection) => {
        const gameIndex = collection.findIndex(item => item.id === game.id);

        if (gameIndex !== -1) {
            // Game is already in the collection, remove it
            const updatedCollection = collection.filter(item => item.id !== game.id);

            // Update the state and the reference with the updated collection
            updateCollection(collection, updatedCollection);
        } else {
            // Game is not in the collection, add it
            const selectedAttributes = {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                rating: game.rating,
                metacritic: game.metacritic,
                released: game.released
            };

            const updatedCollection = [...collection, selectedAttributes];

            // Update the state and the reference with the updated collection
            updateCollection(collection, updatedCollection);
        }
    };

    // Helper function to update the state and reference with the updated collection
    const updateCollection = (oldCollection, newCollection) => {
        switch (oldCollection) {
            case playingGamesRef.current:
                playingGamesRef.current = newCollection;
                setPlayingGames(newCollection);
                break;
            case finishedGamesRef.current:
                finishedGamesRef.current = newCollection;
                setFinishedGames(newCollection);
                break;
            case wantGamesRef.current:
                wantGamesRef.current = newCollection;
                setWantGames(newCollection);
                break;
            case ownedGamesRef.current:
                ownedGamesRef.current = newCollection;
                setOwnedGames(newCollection);
                break;
            default:
                break;
        }
    };

    // handle clear collections
    const handleClearCollections = () => {
        setClearCollections(true);
        console.log('collections cleared successfully');
      };
    //!--------------------------------------
    useEffect(() => {
        const gameId = id;   
        fetchGameData(gameId);
        //console.log('Fetched game');
    }, [id]); 
    if (!gameData) {
        return <div>Loading...</div>;
    }
    //console.log(gameData);
    //-----------------------------------------------------

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
                    <div className="actions">
                        <button onClick={() => handleAddGame(gameData, playingGamesRef.current)}>
                            {playingGamesRef.current.some(item => item.id === gameData.id) ? 'Remove from Playing' : 'Add to Playing'}
                        </button>
                        <button onClick={() => handleAddGame(gameData, finishedGamesRef.current)}>
                            {finishedGamesRef.current.some(item => item.id === gameData.id) ? 'Remove from Finished' : 'Add to Finished'}
                        </button>
                        <button onClick={() => handleAddGame(gameData, wantGamesRef.current)}>
                            {wantGamesRef.current.some(item => item.id === gameData.id) ? 'Remove from Want' : 'Add to Want'}
                        </button>
                        <button onClick={() => handleAddGame(gameData, ownedGamesRef.current)}>
                            {ownedGamesRef.current.some(item => item.id === gameData.id) ? 'Remove from Owned' : 'Add to Owned'}
                        </button>
                        {/* clear collection button }
                        <button onClick={handleClearCollections}>Clear Collections</button>
                        {*/}
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
                                        <img className='screen' src={screenshot.image} alt="" />
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