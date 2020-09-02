import React from 'react';
import { Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Portfolio from './components/Portfolio/Portfolio';
import Languages from './components/Languages/Languages'
import About from './components/About/About'
import Contact from  './components/Contact/Contact'
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/" component={Portfolio} exact={true} />
      <Route path="/" component={Languages} exact={true} />
      <Route path="/" component={About} exact={true} />
      <Route path="/" component={Contact} exact={true} />
      <Route path="/" component={Footer} exact={true} />

    </div>
  )
}

export default App;
