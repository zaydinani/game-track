import '../styles/nav.scss'
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header>
      <button className={`hamburger ${isMenuActive ? 'is-active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
      </button>
      <nav className={`mobile-nav ${isMenuActive ? 'is-active' : ''}`} id="mobile-nav">
        <ul>
          <li><Link to="/" onClick={closeMenu}>hero</Link></li>
          <li><Link to="/home" onClick={closeMenu}>home</Link></li>
          <li><Link to="/playing" onClick={closeMenu}>playing</Link></li>
          <li><Link to="/want" onClick={closeMenu}>want</Link></li>
          <li><Link to="/owned" onClick={closeMenu}>owned</Link></li>
          <li><Link to="/finished" onClick={closeMenu}>finished</Link></li>
          <li><Link to="/about" onClick={closeMenu}>about</Link></li>
        </ul>
      </nav>
      <div>
        <img src="/logo.png" alt="" />
        {/*<a href="/dash">dashboard</a>*/}
      </div>
      <div className="sign-up">
        {/*sign up or log out*/}
        <ul>
          <li className="sign-in hero"><Link to="/">hero</Link></li>
          <li className="sign-in"><Link to="/home">home</Link></li>
          <div className="dropdown">
            <li><a href="">collections</a></li>
            <div className="dropdown-content">
              <Link to="/playing">playing</Link>
              <Link to="/want">want</Link>
              <Link to="/owned">owned</Link>
              <Link to="/finished">finished</Link>
            </div>
          </div>
          <li className="sign-in"><Link to="/about">about</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;