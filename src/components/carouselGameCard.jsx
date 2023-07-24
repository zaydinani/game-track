import '../styles/carouselGameCard.scss';

import { useNavigate } from 'react-router-dom';

function CarouselGameCard(props) {
  const { id, title, imageUrl, publisher, rating } = props;
  const navigate = useNavigate();

  const handleGameClick = () => {
    navigate(`/game/${id}`);
    console.log(`game ${id} clicked`);
  };
  return (
    <div className="game--card">
      <div className='game--card--img'>
        <img src={imageUrl} alt="" />
      </div>
      <div className="game--card--info">
        <a onClick={() => handleGameClick(id)}>
          <h1>{title}</h1>
        </a>
        <p>{publisher}</p>
        <i className="fa-regular fa-star"> metacritic: {rating}</i>        
      </div>
    </div>
  );
}

export default CarouselGameCard;