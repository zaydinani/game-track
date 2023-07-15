import '../styles/gameCard.scss'
function GameCard(props) {
    const { title, imageUrl, rating } = props;
  /*
        <div className="game-container">
        <div className="text-container">
          <h2>{title}</h2>
          <a className='btn' href="">check it out</a>
        </div>
        <img src={imageUrl} alt="" width="100%" height="100%" />
      </div>
    */ 
    return (
      <div className="game-card">
        <div className="game-card__front">
          <div className="game-card__header">
            <div className="game-card__cover">
              <img src={imageUrl}/>
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
              <button className="game-card__button -update">
                check it
              </button>
            </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default GameCard;