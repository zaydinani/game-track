import React, { useState } from 'react';
import '../styles/newhome.scss';

function NewHome() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const carouselItems = [
        {
        title: 'Dota 2',
        description: 'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'
        },
        {
        title: 'The Witcher 3',
        description: 'The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg'
        },
        {
        title: 'RDR 2',
        description: 'RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
        imageUrl: 'https://ucarecdn.com/ec1918b1-2674-452c-bf61-8f73d8cc40c6/rdr2.jpg'
        },
        {
            title: 'Dota 2',
            description: 'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
            imageUrl: 'https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg'
        },

    ];

  return (
    <section className="game-section">
        <h1 className="line-title">trending games</h1>
        <div className="trending-games-container">
            {carouselItems.map((item, index) => (
                <div className={`item ${activeIndex === index ? 'active' : ''}`} style={{ backgroundImage: `url(${item.imageUrl})` }} onClick={() => handleItemClick(index)} key={index}>
                    <div className="item-desc">
                    <h3 className='game-title'>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default NewHome;