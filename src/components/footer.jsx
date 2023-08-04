import '../styles/footer.scss'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h3>game track</h3>
                <p>This website has been skillfully crafted by Zayd Inani to serve as a showcase in my portfolio. The impressive collection of games and their data is sourced through the integration of the RAWG API, bringing you a comprehensive and immersive experience.</p>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/zayd.inani/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/zayd-inani-a23161248/" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://www.instagram.com/zayd_inani" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://github.com/zaydinani" target="_blank"><i className="fa-brands fa-square-github"></i></a></li>
                </ul>

            </div>
            <div className="footer-bottom">
                <p>copyright &copy; <a href="#">zayd inani</a>  </p>
                <div className="footer-menu">
                    <ul className="f-menu">
                    <li className="sign-in hero"><Link to="/">hero</Link></li>
                    <li className="sign-in"><Link to="/home">home</Link></li>
                    <li className="sign-in"><Link to="/about">about</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
  }
  
  export default Footer
  