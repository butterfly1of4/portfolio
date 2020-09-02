import React from 'react';
import { Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Portfolio from './components/Portfolio/Portfolio';
import Languages from './components/Languages/Languages'
import About from './components/About/About'

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/" component={Portfolio} exact={true} />
      <Route path="/" component={Languages} exact={true} />
      <Route path="/" component={About} exact={true} />

    </div>
  )
}

export default App;
