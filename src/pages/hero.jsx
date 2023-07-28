import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/hero.scss';

function Hero() {
  const [activeTab, setActiveTab] = useState('tab-1');

  const selectItem = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="showcase">
        <div className="showcase-top">
          <img src="/logo.png" alt="" />
        </div>
        <div className="showcase-content">
          <h1>welcome</h1>
          <p>keep track of your favorite games and characters</p>
            <Link className="btn btn-xl" to="/home">try it out</Link>
        </div>
      </div>

      <section className="tabs">
        <div className="tabs-containers">
          <div
            id="tab-1"
            className={`tab-item ${activeTab === 'tab-1' ? 'tab-border' : ''}`}
            onClick={() => selectItem('tab-1')}
          >
            <i className="fa-solid fa-plus fa-3x"></i>
            <p className="hide-sm">add your favorite games</p>
          </div>
          <div
            id="tab-2"
            className={`tab-item ${activeTab === 'tab-2' ? 'tab-border' : ''}`}
            onClick={() => selectItem('tab-2')}
          >
            <i className="fa-solid fa-people-group fa-3x"></i>
            <p className="hide-sm">add your favorite characters</p>
          </div>
        </div>
      </section>

      <section className="tab-content">
        <div className="container-info">
          <div
            id="tab-1-content"
            className={`tab-content-item ${activeTab === 'tab-1' ? 'show' : ''}`}
          >
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  you can add your own games and create a list of games in an elegant design
                </p>
                <Link className="btn btn-lg" to="/home">check it out</Link>

              </div>
              <img src="/game.png" alt="" />
            </div>
          </div>

          <div
            id="tab-2-content"
            className={`tab-content-item ${activeTab === 'tab-2' ? 'show' : ''}`}
          >
            <div className="tab-2-content-top">
              <p className="text-lg">add and keep track of all your favorite characters</p>
              <Link className="btn btn-lg" to="/home">check it out</Link>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src="/character.png" alt="" />
              </div>
              <div>
                <img src="/character.png" alt="" />
              </div>
              <div>
                <img src="/character.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;