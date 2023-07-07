import '../styles/about.scss'

function about() {
  
    return (
        <div className='about-container'>
                <div className='about-img'>
                    <img src="/logo.png" alt="" />
                </div>
                <div className='about-info'>
                    <h1>about me</h1>
                    <p>
                        My name is <span>Zayd Inani</span>, a 24-year-old developer from Morocco. 
                        As a passionate and self-taught developer, 
                        I have created this website to further enhance and demonstrate my web development skills. 
                        This project, designed to be showcased in my portfolio, 
                        utilizes <span>React</span> for the front-end and <span>Node.js</span> for the back-end, 
                        leveraging the <span><a href="https://rawg.io/"></a>rawg.io</span> free API for video game data. 
                        If you have any inquiries or would like to connect, 
                        please don't hesitate to reach out via email at <span>zaydinani@protonmail.com</span>
                        . You can also explore the GitHub repository for this project at 
                        <span> https://github.com/zaydinani/game-track</span>. 
                        Thank you for visiting and taking the time to explore my work!
                    </p>
                </div>
        </div>
    );
  }
  
  export default about;