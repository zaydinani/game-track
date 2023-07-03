import React, { useState } from 'react';
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
          <a href="#" className="btn btn-rounded">
            Sign In
          </a>
        </div>
        <div className="showcase-content">
          <h1>welcome</h1>
          <p>keep track of your favorite games and characters</p>
          <a href="#" className="btn btn-xl">
            sign up now
            <i className="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
      </div>

      <section className="tabs">
        <div className="container">
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
        <div className="container">
          <div
            id="tab-1-content"
            className={`tab-content-item ${activeTab === 'tab-1' ? 'show' : ''}`}
          >
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  you can add your own games and create a list of games in an elegant design
                </p>
                <a href="#" className="btn btn-lg">
                  sign up now
                </a>
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
              <a href="#" className="btn btn-lg">
                sign up now
              </a>
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