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
      <div class="game-card">
        <div class="game-card__front">
          <div class="game-card__header">
            <div class="game-card__cover">
              <img src={imageUrl}/>
            </div>
            <div class="game-card__title">{title}</div>
            <button class="game-card__touch-target" aria-label="Expand"></button>
          </div>
        </div>
        <div class="game-card__back">
          <div class="game-card__content">
            <div class="game-card__metadata">
            <i class="fa-regular fa-star"> {rating}</i>        
            </div>
            <div class="game-card__buttons">
              <button class="game-card__button -update">
                check it
              </button>
            </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default GameCard;