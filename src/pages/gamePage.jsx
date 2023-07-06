import '../styles/gamePage.scss'

function game() {
    return (
      <>
        <div className="game-page-container">
            <div className='game-img'>
                <img src="/Grand_Theft_Auto_V.png" alt="" />
            </div>
            <div className='game-info'>
                <h1>grand theft auto V</h1>
                <h3>17 sep 2013</h3>
                <div className='consoles'>
                    <p>playstation 4</p>
                    <p>xbox 360</p>
                    <p>playstation 3</p>
                    <p>pc</p>
                    <p>xbox one</p>
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
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
  
export default game