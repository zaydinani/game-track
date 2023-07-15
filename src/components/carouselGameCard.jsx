import '../styles/carouselGameCard.scss';

function carouselGameCard(props) {
    const { title, imageUrl, publisher, rating } = props;
  return (
      <div className="game--card">
        <div className='game--card--img'>
          <img src={imageUrl} alt="" />
        </div>
        <div className="game--card--info">
          <a href="">
            <h1>{title}</h1>
          </a>
          <p>{publisher}</p>
          <i className="fa-regular fa-star"> metacritic: {rating}</i>        
        </div>
      </div>

  );
}

export default carouselGameCard;