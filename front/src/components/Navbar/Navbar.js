import React, { Component } from "react";
import "./Navbar.css";
import CircleLogo from "../../assets/CircleLogo.png";
import { Link } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage"
import "react-sticky-header/styles.css";
// import { StickyContainer, Sticky } from "react-sticky";
import StickyHeader from 'react-sticky-header'

class Navbar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <StickyHeader
        header = {
        <nav className="NavBar">
          <div className="Header ">
            <img src={CircleLogo} className="circleLogo" alt="circleLogo" />
            <div className="Header_root">
              <ul className="Nav_item_wrapper">
                <li className="Nav_item">
                  <Link className="Nav_link" to="/LandingPage">
                    HOME
                  </Link>
                </li>
                <li className="Nav_item">
                  <Link className="Nav_link" to="/Portfolio">
                    PORTFOLIO
                  </Link>
                </li>
                <li className="Nav_item">
                  <Link className="Nav_link" to="/Languages">
                    LANGUAGES
                  </Link>
                </li>
                <li className="Nav_item">
                  <Link className="Nav_link" to="/About">
                    ABOUT
                  </Link>
                </li>{" "}
                <li className="Nav_item">
                  <Link className="Nav_link" to="/Contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        } />
    );
  }
}

export default Navbar;
