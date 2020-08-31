import React, { Component } from "react";
import "./Navbar.css";
import CircleLogo from "../../assets/CircleLogo.png";
import { Link } from "react-router-dom";

// React Class Component
class Navbar extends Component {
  constructor() {
    super();

    //  this.state ={classlist:'Navbar'}
  }
  render() {
    return (
      <nav className="NavBar">
        <div className="Header">
          <img src={CircleLogo} className="circleLogo" alt="circleLogo" />
          <ul className="Nav_item_wrapper">
            <li className="navbar_home">
              <Link className="Nav_Home_link" to="#">
                HOME
              </Link>
            </li>
            <li className="navbar_portfolio">
              <Link className="Nav_Portfolio_link" to="#">
                PORTFOLIO
              </Link>
            </li>
            <li className="navbar_languages">
              <Link className="Nav_Languages_link" to="#">
                LANGUAGES
              </Link>
            </li>
            <li className="navbar_ABOUT">
              <Link className="Nav_About_link" to="#">
                LANGUAGES
              </Link>
            </li>    <li className="navbar_contact">
              <Link className="Nav_Contact_link" to="#">
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
