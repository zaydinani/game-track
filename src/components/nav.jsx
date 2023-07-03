import '../styles/nav.scss'

import React, { useState } from 'react';

function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <button className={`hamburger ${isMenuActive ? 'is-active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
      </button>
      <nav className={`mobile-nav ${isMenuActive ? 'is-active' : ''}`} id="mobile-nav">
        <ul>
          <li><a href="/cart">cart</a></li>
          <li><a href="/profile">profile</a></li>
          <li><a href="/products">desk pads</a></li>
        </ul>
      </nav>
      <div>
        <img src="/logo.png" alt="" />
        {/*<a href="/dash">dashboard</a>*/}
      </div>
      <div className="sign-up">
        {/*sign up or log out*/}
        <ul>
          <li className="sign-in"><a href="/sign-up">sign up</a></li>
          <li className="sign-in"><a href="/sign-in">sign in</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;