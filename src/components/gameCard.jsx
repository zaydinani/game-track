import '../styles/gameCard.scss';
import { useNavigate } from 'react-router-dom';

function GameCard(props) {
  const { id, title, imageUrl, rating } = props;
  const navigate = useNavigate();

  const handleGameClick = () => {
    navigate(`/game/${id}`);
    console.log(`game ${id} clicked`);
  };

  return (
    <div className="game-card">
      <div className="game-card__front">
        <div className="game-card__header">
          <div className="game-card__cover">
            <img src={imageUrl} alt="" />
          </div>
          <div className="game-card__title">{title}</div>
          <button className="game-card__touch-target" aria-label="Expand"></button>
        </div>
      </div>
      <div className="game-card__back">
        <div className="game-card__content">
          <div className="game-card__metadata">
            <i className="fa-regular fa-star"> {rating}</i>
          </div>
          <div className="game-card__buttons">
            <button className="game-card__button -update" onClick={() => handleGameClick(id)}>
              check it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;