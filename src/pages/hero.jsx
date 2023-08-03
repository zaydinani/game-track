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
            <i class="fa-solid fa-layer-group fa-3x"></i>
            <p className="hide-sm">sort in collections</p>
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
                  Explore an extensive collection of over 500,000 games across 50 platforms, including mobile, by utilizing our powerful search and browsing tools. Uncover detailed information, captivating screenshots, and system requirements for each game, enabling you to make well-informed choices and dive into your gaming adventures with confidence.
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
              <p className="text-lg">You can effortlessly categorize your games into distinct collections, such as owned, playing, finished, and want to keep, ensuring impeccable organization for your gaming library. Enjoy the ease of managing and accessing your games, all neatly arranged according to your preferences and play status.</p>
              <img src="/chrome_qezmqrvs5O.png" alt="" />
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <Link className="btn btn-lg" to="/home">check it out</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;