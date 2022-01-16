import '../styles/App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './Home.js'
import Landing from './Landing'
import Portfolio from './Portfolio'

function App() {
  return(
  <Router>
      <div>
          <Routes>
            <Route exact path="/" element= {<Landing/>} />
            <Route path = "/home" element = {<Home/>} />
            <Route path = "/portfolio" element = {<Portfolio/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
