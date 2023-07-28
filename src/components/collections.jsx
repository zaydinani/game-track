import { useLocation } from 'react-router-dom';

import '../styles/collections.scss'
import GameCard from './gameCard'

function Collection() {
    const location = useLocation();
    let title;
    if (location.pathname === '/playing') {
      title = 'Playing Now';
    } else if (location.pathname === '/want') {
      title = 'Want to Play';
    } else if (location.pathname === '/owned') {
      title = 'Owned Games';
    } else if (location.pathname === '/finished') {
      title = 'Finished Games';
    }
  
    return (
        <div className='collection-container'>
            <h1>{title}</h1>
            <div className='card-container'>
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
                <GameCard
                    title="Retro Arcade"
                    description="Lorem ipsum deserunt repellat enim quos quisquam!"
                    imageUrl="https://marketplace.canva.com/EAFDxS7TeiQ/1/0/1131w/canva-blue-and-white-illustration-retro-arcade-gaming-event-poster-9Rte-AYY5AQ.jpg"
                />
            </div>
        </div>
    );
  }
  
  export default Collection;