import React, { Component } from "react";
import "./Navbar.css";
import CircleLogo from "../../assets/CircleLogo.png";
import { Link } from "react-router-dom";

// React Class Component
class Navbar extends Component {
  constructor() {
    super();


  }
  render() {
    return (
      <nav className="NavBar">
        <div className="Header ">
          <img src={CircleLogo} className="circleLogo" alt="circleLogo" />
          <ul className="Nav_item_wrapper">
            <li className="navbar_item">
              <Link className="Nav_link" to="#">
                HOME
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="Nav_link" to="#">
                PORTFOLIO
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="Nav_link" to="#">
                LANGUAGES
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="NavAbout_link" to="#">
                LANGUAGES
              </Link>
            </li>    <li className="navbar_item">
              <Link className="Nav_link" to="#">
                LANGUAGES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
