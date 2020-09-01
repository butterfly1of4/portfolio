import React, { Component } from "react";
import "./Navbar.css";
import CircleLogo from "../../assets/CircleLogo.png";
import { Link } from "react-router-dom";
import 'react-sticky-header/styles.css';
// import { StickyContainer, Sticky } from 'react-sticky';
// React Class Component
class Navbar extends Component {
  constructor() {
    super();


  }
  render() {
    return (
    // <StickyContainer>
      <nav className="NavBar">
        <div className="Header ">
          <img src={CircleLogo} className="circleLogo" alt="circleLogo" />
          <div className="Header_root">
          <ul className="Nav_item_wrapper">
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                HOME
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                PORTFOLIO
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                LANGUAGES
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                ABOUT
              </Link>
            </li>    <li className="Nav_item">
              <Link className="Nav_link" to="#">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      // </StickyContainer>
    );
  }
}

export default Navbar;
