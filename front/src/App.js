import React from 'react';
import { Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <div>
      <Navbar />
      {/* <Route path="/" component={LandingPage} exact={true} /> */}
    </div>
  )
}

export default App;
