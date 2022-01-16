import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import Doggo from './Doggo.js'

const Home = () => {
    return(
    <div className="App">
      <header className="App-header">
          <Doggo delay="15000"/>
          <button>
        <   Link to="/portfolio">Portfolio</Link>
          </button>
      </header>
    </div>
    );
}

export default Home;