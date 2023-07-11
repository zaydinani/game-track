import '../styles/gameCard.scss'
function GameCard(props) {
    const { title, imageUrl } = props;
  
    return (
      <div className="game-container">
        <div className="text-container">
          <h2>{title}</h2>
          <a className='btn' href="">check it out</a>
        </div>
        <img src={imageUrl} alt="" width="100%" height="100%" />
      </div>
    );
  }
  
  export default GameCard;